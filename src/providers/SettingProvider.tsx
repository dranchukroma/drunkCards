import { useContext, createContext, useState } from "react";
import type { ReactNode } from 'react';
import type { LanguageCode } from "i18n/types";
import theme, { type AppThemeType } from "@styles/theme";

type SettingsContextType = {
    audio: {
        setMusic: (value: boolean) => void;
        music: boolean;
        setSounds: (value: boolean) => void;
        sounds: boolean;
    },
    game: {
        setGameSetup: (value: boolean) => void;
        gameSetup: boolean;
        setLimitTime: (value: number) => void;
        limitTime: number;
        setLimitCards: (value: number) => void;
        limitCards: number;
        setInfinityTime: (value: boolean) => void;
        infinityTime: boolean;
        setInfinityCards: (value: boolean) => void;
        infinityCards: boolean;
    },
    language: {
        setLanguage: (value: LanguageCode) => void;
        language: LanguageCode;
        setMultiLanguage: (value: boolean) => void;
        multiLanguage: boolean;
    }
    style: {
        setBackground: (value: string) => void;
        background: string;
        appTheme: AppThemeType;
    }
};

const SettingsContext = createContext<SettingsContextType | null>(null);

type SettingsProviderProps = {
    children: ReactNode,
}

export function SettingsProvider({ children }: SettingsProviderProps) {
    const setDefaultString = (key: string, defaultValue: string): string => {
        const item = localStorage.getItem(key);
        if (item) return item;
        localStorage.setItem(key, defaultValue);
        return defaultValue;
    }
    const setDefaultBoolean = (key: string, defaultValue: boolean): boolean => {
        const item = localStorage.getItem(key);
        if (item) return item === 'true';
        localStorage.setItem(key, String(defaultValue));
        return defaultValue;
    }
    const setDefaultNumber = (key: string, defaultValue: number): number => {
        const item = localStorage.getItem(key);
        if (item) return Number(item);
        localStorage.setItem(key, String(defaultValue));
        return defaultValue;
    }

    const userLang = (navigator.language || navigator.languages[0]).split("-")[0];

    const [settings, setSettings] = useState({
        language: setDefaultString('language', userLang) as LanguageCode,
        multiLanguage: setDefaultBoolean('multiLanguage', true),
        sounds: setDefaultBoolean('sounds', false),
        music: setDefaultBoolean('music', false),
        background: setDefaultString('background', 'bg1'),
        limitTime: setDefaultNumber('limitTime', 90),
        limitCards: setDefaultNumber('limitCards', 36),
        infinityTime: setDefaultBoolean('infinityTime', false),
        infinityCards: setDefaultBoolean('infinityCards', false),
        gameSetup: setDefaultBoolean('gameSetup', true),
    })

    function setNewSettingValue(key: string, newValue: string | boolean | number) {
        localStorage.setItem(key, String(newValue))
        setSettings(prev => ({
            ...prev,
            [key]: newValue,
        }))
    }

    const bgKey = settings.background as keyof typeof theme.appTheme;
    const value = {
        audio: {
            setMusic: (newValue: boolean) => setNewSettingValue('music', newValue),
            music: settings.music,
            setSounds: (newValue: boolean) => setNewSettingValue('sounds', newValue),
            sounds: settings.sounds,
        },
        game: {
            setGameSetup: (newValue: boolean) => setNewSettingValue('gameSetup', newValue),
            gameSetup: settings.gameSetup,
            setLimitTime: (newValue: number) => setNewSettingValue('limitTime', newValue),
            limitTime: settings.limitTime,
            setLimitCards: (newValue: number) => setNewSettingValue('limitCards', newValue),
            limitCards: settings.limitCards,
            setInfinityTime: (newValue: boolean) => setNewSettingValue('infinityTime', newValue),
            infinityTime: settings.infinityTime,
            setInfinityCards: (newValue: boolean) => setNewSettingValue('infinityCards', newValue),
            infinityCards: settings.infinityCards,
        },
        language: {
            setLanguage: (newValue: LanguageCode) => setNewSettingValue('language', newValue),
            language: settings.language,
            setMultiLanguage: (newValue: boolean) => setNewSettingValue('multiLanguage', newValue),
            multiLanguage: settings.multiLanguage,
        },
        style: {
            setBackground: (newValue: string) => setNewSettingValue('background', newValue),
            background: settings.background,
            appTheme: theme.appTheme[bgKey],
        }
    };

    return (
        <SettingsContext.Provider value={value}>
            {children}
        </SettingsContext.Provider>
    )
}

export const useSettings = () => {
    const context = useContext(SettingsContext);
    if (!context) {
        throw new Error('useSettings must be used within a SettingsContext')
    }
    return context;
}