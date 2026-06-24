import { context, extensionName, updateMessageBlock } from './config';
import { translateText } from './translate';
import { AutoMode, defaultSettings, languageCodes } from './types/types';
import { tr, trFmt, applyPluginLocale } from './locale';

const incomingModes: AutoMode[] = ['responses', 'both'];
const outgoingModes: AutoMode[] = ['inputs', 'both'];

let generating: number[] = [];

/* ── helpers ─────────────────────────────────────────── */

function lang() {
    return getSettings().uiLanguage || 'en';
}

function __(key: string): string {
    return tr(key, lang());
}

function __fmt(key: string, params: Record<string, string>): string {
    return trFmt(key, lang(), params);
}

function toast(severity: string, message: string) {
    const cmd = context.SlashCommandParser?.commands?.['echo'];
    if (cmd?.callback) {
        cmd.callback({ severity }, message);
    } else {
        console.log(`[${severity}] ${message}`);
    }
}

function getSettings() {
    return context.extensionSettings.magicTranslation;
}

/* ── defaults ────────────────────────────────────────── */

function initDefaults() {
    const s = getSettings();
    if (!s) {
        context.extensionSettings.magicTranslation = { ...defaultSettings };
        context.saveSettingsDebounced();
        return;
    }
    let changed = false;
    for (const [key, value] of Object.entries(defaultSettings)) {
        if ((s as any)[key] === undefined) {
            (s as any)[key] = value;
            changed = true;
        }
    }
    if (changed) context.saveSettingsDebounced();
}

/* ── translate ───────────────────────────────────────── */

async function doTranslate(msgId: number, type: 'incoming' | 'user' | 'impersonate') {
    const s = getSettings();
    if (!s.apiUrl || !s.model) {
        toast('warning', __('toast_setup_first'));
        return;
    }

    const msg = context.chat[msgId];
    if (!msg) return;
    if (generating.includes(msgId)) {
        toast('warning', __('toast_in_progress'));
        return;
    }

    const sourceText = msg.mes;
    if (!sourceText) return;

    // Toggle off existing translation on AI messages
    if (type !== 'user' && msg.extra?.display_text) {
        delete msg.extra.display_text;
        updateMessageBlock(msgId, msg);
        return;
    }

    // Pick the right target language: user input → inputLanguage, AI responses → targetLanguage
    const langCode = type === 'incoming' ? s.targetLanguage : (s.inputLanguage || s.targetLanguage);
    const langName = Object.entries(languageCodes).find(([, c]) => c === langCode)?.[0] || langCode!;

    generating.push(msgId);
    try {
        const result = await translateText(
            sourceText,
            s.prompt!,
            langName,
            s.apiUrl!,
            s.apiKey || '',
            s.model!,
        );

        if (type === 'user') {
            // User input: replace the message text so the LLM gets the translation
            msg.mes = result;
        } else {
            // AI response: keep original text, show translation via display_text
            msg.extra ??= {};
            msg.extra.display_text = result;
        }

        updateMessageBlock(msgId, msg);
        await context.saveChat();
    } catch (err: any) {
        console.error('Translation failed:', err);
        toast('error', __fmt('toast_translate_failed', { msg: err.message || String(err) }));
    } finally {
        generating = generating.filter(id => id !== msgId);
    }
}

/* ── settings UI ─────────────────────────────────────── */

function bindSettingsUI() {
    const el = $('.magic-translation-settings');
    if (!el.length) return;

    const s = getSettings();

    function applyLanguage(locale: string) {
        applyPluginLocale(el[0], locale);
        // If model field is a <select>, update the placeholder option text
        const modelField = el.find('.model');
        if (modelField.is('select')) {
            modelField.find('option[value=""]').text(tr('select_model', locale));
        }
        // Update manual model button title
        const manualBtn = el.find('.manual_model');
        if (manualBtn.length) {
            manualBtn.attr('title', tr('tooltip_manual_input', locale));
        }
    }

    el.find('.ui_language')
        .val(s.uiLanguage ?? '')
        .on('change', function () {
            s.uiLanguage = $(this).val() as string;
            context.saveSettingsDebounced();
            applyLanguage(s.uiLanguage!);
        });

    // Initial language apply done after render in init, but call again here for safety
    applyLanguage(s.uiLanguage || 'en');

    el.find('.api_url')
        .val(s.apiUrl ?? '')
        .on('change', function () {
            s.apiUrl = $(this).val() as string;
            context.saveSettingsDebounced();
        });

    el.find('.api_key')
        .val(s.apiKey ?? '')
        .on('change', function () {
            s.apiKey = $(this).val() as string;
            context.saveSettingsDebounced();
        });

    el.find('.model')
        .val(s.model ?? '')
        .on('change', function () {
            s.model = $(this).val() as string;
            context.saveSettingsDebounced();
        });

    // Fetch available models
    async function refreshModelList() {
        const url = (el.find('.api_url').val() as string)?.replace(/\/+$/, '');
        const key = el.find('.api_key').val() as string;
        if (!url) { toast('warning', __('toast_enter_url')); return; }

        const btn = el.find('.refresh_models');
        btn.addClass('fa-spin');
        try {
            const endpoint = url.endsWith('/models') ? url : `${url}/models`;
            const headers: Record<string, string> = { 'Content-Type': 'application/json' };
            if (key) headers['Authorization'] = `Bearer ${key}`;

            const res = await fetch(endpoint, { headers });
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            const data = await res.json();
            const models: string[] = (data.data || data.models || [])
                .map((m: any) => m.id || m.name)
                .filter(Boolean)
                .sort();

            if (!models.length) { toast('error', __('toast_no_models')); return; }

            // Replace text input with a select dropdown
            const modelInput = el.find('.model');
            const currentVal = modelInput.val() as string;
            const select = $(`<select class="text_pole model"></select>`);
            select.append(`<option value="">${__('select_model')}</option>`);
            models.forEach(id => {
                select.append(`<option value="${id}" ${id === currentVal ? 'selected' : ''}>${id}</option>`);
            });
            select.on('change', function () {
                s.model = $(this).val() as string;
                context.saveSettingsDebounced();
            });
            modelInput.replaceWith(select);

            // Add a button to switch back to manual input
            let manualBtn = el.find('.manual_model');
            if (!manualBtn.length) {
                manualBtn = $(`<button class="menu_button fa-solid fa-pen interactable manual_model" title="${__('tooltip_manual_input')}"></button>`);
                el.find('.model').parent().append(manualBtn);
            }
            manualBtn.off('click').on('click', function () {
                const sel = el.find('.model');
                const savedVal = s.model || '';
                const input = $(`<input class="text_pole model" type="text" list="model_list" value="${savedVal}" spellcheck="false" style="flex:1" />`);
                input.attr('placeholder', __('settings_model_placeholder'));
                input.on('change', function () {
                    s.model = $(this).val() as string;
                    context.saveSettingsDebounced();
                });
                sel.replaceWith(input);
                const list = el.find('.model_list');
                list.empty();
                models.forEach(id => list.append(`<option value="${id}">`));
                $(this).remove();
            });

            toast('success', __fmt('toast_models_found', { count: String(models.length) }));
        } catch (err: any) {
            toast('error', __fmt('toast_fetch_failed', { msg: err.message || String(err) }));
        } finally {
            btn.removeClass('fa-spin');
        }
    }

    el.find('.refresh_models').on('click', refreshModelList);

    el.find('.target_language')
        .val(s.targetLanguage ?? '')
        .on('change', function () {
            s.targetLanguage = $(this).val() as string;
            context.saveSettingsDebounced();
        });

    el.find('.input_language')
        .val(s.inputLanguage ?? '')
        .on('change', function () {
            s.inputLanguage = $(this).val() as string;
            context.saveSettingsDebounced();
        });

    el.find('.auto_mode')
        .val(s.autoMode ?? '')
        .on('change', function () {
            s.autoMode = $(this).val() as AutoMode;
            context.saveSettingsDebounced();
        });

    el.find('.prompt')
        .val(s.prompt ?? '')
        .on('change', function () {
            s.prompt = $(this).val() as string;
            context.saveSettingsDebounced();
        });

    el.find('.restore_default').on('click', function () {
        el.find('.prompt').val(defaultSettings.prompt).trigger('change');
    });
}

/* ── init ────────────────────────────────────────────── */

async function initUI() {
    initDefaults();

    const s = getSettings();

    // Build language code options for both dropdowns
    const langOptions = (type: 'target' | 'input') =>
        Object.entries(languageCodes).reduce(
            (acc, [name, code]) => {
                acc[code] = {
                    name,
                    selected: code === (type === 'target' ? s.targetLanguage : s.inputLanguage),
                };
                return acc;
            },
            {} as Record<string, { name: string; selected: boolean }>,
        );

    const html = await context.renderExtensionTemplateAsync(
        `third-party/${extensionName}`,
        'templates/settings',
        {
            languageCodes: langOptions('target'),
            inputLanguageCodes: langOptions('input'),
        },
    );
    $('#extensions_settings').append(html);
    bindSettingsUI();

    // Translate button on each message
    const btn = $(
        `<div title="Magic Translate" class="mes_button mes_magic_translation_button fa-solid fa-globe interactable" tabindex="0"></div>`,
    );
    $('#message_template .mes_buttons .extraMesButtons').prepend(btn);

    $(document).on('click', '.mes_magic_translation_button', function () {
        const block = $(this).closest('.mes');
        const id = Number(block.attr('mesid'));
        doTranslate(id, 'incoming');
    });

    // Auto-translate hooks
    context.eventSource.on('message_updated', (msgId: number) => {
        if (incomingModes.includes(getSettings().autoMode!)) {
            doTranslate(msgId, 'incoming');
        }
    });

    context.eventSource.on('impersonate_ready', (msgId: number) => {
        if (outgoingModes.includes(getSettings().autoMode!)) {
            doTranslate(msgId, 'impersonate');
        }
    });

    // @ts-ignore
    context.eventSource.makeFirst('character_message_rendered', (msgId: number) => {
        if (incomingModes.includes(getSettings().autoMode!)) {
            doTranslate(msgId, 'incoming');
        }
    });

    // @ts-ignore
    context.eventSource.makeFirst('user_message_rendered', (msgId: number) => {
        if (outgoingModes.includes(getSettings().autoMode!)) {
            doTranslate(msgId, 'user');
        }
    });
}

initUI();
