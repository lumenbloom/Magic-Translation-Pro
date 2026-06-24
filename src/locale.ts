/**
 * Plugin-internal i18n — independent of ST's global locale.
 */

type LocaleMap = Record<string, string>;

const en: LocaleMap = {
    'settings_title': 'Magic Translation Pro',
    'settings_api_url': 'API URL',
    'settings_api_key': 'API Key',
    'settings_model': 'Model',
    'settings_model_placeholder': 'gpt-4o-mini, deepseek-chat, ...',
    'settings_target_language': 'Display Language  —  AI responses shown in this language',
    'settings_input_language': 'Input Language  —  Your messages translated to this language before sending',
    'settings_ui_language': 'UI Language',
    'settings_auto_mode': 'Auto Mode',
    'settings_auto_mode_none': 'None',
    'settings_auto_mode_responses': 'Translate responses',
    'settings_auto_mode_inputs': 'Translate inputs',
    'settings_auto_mode_both': 'Translate both',
    'settings_prompt': 'Translation Prompt',
    'settings_restore': 'Restore default',
    'settings_prompt_hint': 'Use {{text}} for the message content and {{language}} for the target language name.',
    'tooltip_refresh_models': 'Fetch available models from API',
    'tooltip_manual_input': 'Manual input',
    'select_model': '— Select a model —',

    'toast_setup_first': 'Set API URL and Model in Magic Translation settings',
    'toast_in_progress': 'Translation already in progress',
    'toast_enter_url': 'Enter API URL first',
    'toast_no_models': 'No models found',
    'toast_models_found': 'Found {count} models',
    'toast_fetch_failed': 'Failed to fetch models: {msg}',
    'toast_translate_failed': 'Translation failed: {msg}',
    'toast_api_error': 'API error ({status}): {msg}',

    'lang_en': 'English',
    'lang_zh-CN': '中文',
};

const zhCN: LocaleMap = {
    'settings_title': 'Magic Translation Pro',
    'settings_api_url': 'API 地址',
    'settings_api_key': 'API 密钥',
    'settings_model': '模型',
    'settings_model_placeholder': 'gpt-4o-mini, deepseek-chat, ...',
    'settings_target_language': '显示语言  —  AI 回复以此语言显示',
    'settings_input_language': '输入语言  —  你的消息翻译成此语言后再发送',
    'settings_ui_language': '界面语言',
    'settings_auto_mode': '自动模式',
    'settings_auto_mode_none': '关闭',
    'settings_auto_mode_responses': '翻译回复',
    'settings_auto_mode_inputs': '翻译输入',
    'settings_auto_mode_both': '全部翻译',
    'settings_prompt': '翻译提示词',
    'settings_restore': '恢复默认',
    'settings_prompt_hint': '用 {{text}} 表示消息内容，{{language}} 表示目标语言名称。',
    'tooltip_refresh_models': '从 API 获取可用模型列表',
    'tooltip_manual_input': '手动输入',
    'select_model': '— 选择模型 —',

    'toast_setup_first': '请先在 Magic Translation 设置中填写 API 地址和模型',
    'toast_in_progress': '正在翻译中',
    'toast_enter_url': '请先填写 API 地址',
    'toast_no_models': '未找到模型',
    'toast_models_found': '找到 {count} 个模型',
    'toast_fetch_failed': '获取模型列表失败：{msg}',
    'toast_translate_failed': '翻译失败：{msg}',
    'toast_api_error': 'API 错误（{status}）：{msg}',

    'lang_en': 'English',
    'lang_zh-CN': '中文',
};

const allLocales: Record<string, LocaleMap> = { en, 'zh-CN': zhCN };

/**
 * Translate a key into the given locale.
 * Falls back to English, then returns the key itself.
 */
export function tr(key: string, locale: string): string {
    return allLocales[locale]?.[key] ?? allLocales['en']?.[key] ?? key;
}

/**
 * Replace `{key}` placeholders in a translated string.
 */
export function trFmt(key: string, locale: string, params: Record<string, string>): string {
    let s = tr(key, locale);
    for (const [k, v] of Object.entries(params)) {
        s = s.replace(`{${k}}`, v);
    }
    return s;
}

/**
 * Apply plugin translations to elements with `data-i18n-plugin` attribute.
 * Supports:
 *   data-i18n-plugin="key"                     → replace textContent
 *   data-i18n-plugin="[attr]key"               → replace attribute
 *   data-i18n-plugin="[placeholder]key;[title]key2"  → multi-key / multi-attr
 */
export function applyPluginLocale(root: HTMLElement | JQuery<HTMLElement>, locale: string): void {
    const el = root instanceof jQuery ? root[0] : root;
    if (!el) return;

    el.querySelectorAll('[data-i18n-plugin]').forEach((node) => {
        const raw = node.getAttribute('data-i18n-plugin');
        if (!raw) return;
        // Support semicolon-delimited keys like ST does
        const keys = raw.split(';');
        for (const entry of keys) {
            const attrMatch = entry.match(/^\[(\S+)\](.+)/);
            if (attrMatch) {
                const translated = tr(attrMatch[2], locale);
                node.setAttribute(attrMatch[1], translated);
            } else {
                const translated = tr(entry, locale);
                node.textContent = translated;
            }
        }
    });
}
