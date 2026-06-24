declare global {
    interface SillyTavernContext {
        extensionSettings: {
            magicTranslation: any;
        };
        chat: any[];
        eventSource: any;
        saveSettingsDebounced: () => void;
        saveChat: () => Promise<void>;
        renderExtensionTemplateAsync: (
            extensionName: string,
            templateId: string,
            templateData?: object,
            sanitize?: boolean,
            localize?: boolean,
        ) => Promise<string>;
        SlashCommandParser?: {
            commands?: Record<string, { callback?: (args: any, msg: string) => void }>;
        };
    }

    const SillyTavern: {
        getContext(): SillyTavernContext;
    };
}

export {};
