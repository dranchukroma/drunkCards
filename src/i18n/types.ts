import { i18n } from "i18n";

export type TranslationSchema = {
    menu: {
        logoLabel: string;
        playCTA: string;
        rulesCTA: string;
        settingsCTA: string;
    };
    settings: {
        cardLimit: string;
        cardLimitTooltip: string;
        limitTime: string;
        limitTimeTooltip: string;
        music: string;
        musicTooltip: string;
        sounds: string;
        soundsTooltip: string;
        background: string;
        backgroundTooltip: string;
        multiLanguage: string;
        multiLanguageTooltip: string;
        gameSetUp: string;
        gameSetUpTooltip: string;
        language: string;
        languageTooltip: string;
        yesOption: string;
        noOption: string;
    },
    game: {
        showCard: string;
        cardAction: {
            c2: string;
            c3: string;
            c4: string;
            c5: string;
            c6: string;
            c7: string;
            c8: string;
            c9: string;
            c10: string;
            c11: string;
            c12: string;
            c13: string;
            c14: string;
        };
        cardLeft: string;
        gameEnd: string;
    };
}

export type LanguageCode = keyof typeof i18n;
