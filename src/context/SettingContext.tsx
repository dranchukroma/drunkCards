import { useContext, createContext, useState } from "react";
import type { ReactNode } from 'react';
import type { LanguageCode } from "i18n/types";

type SettingsContextType = {
    setLanguage: (value: LanguageCode) => void;
    setMultiLanguage: (value: boolean) => void;
    setSounds: (value: boolean) => void;
    setMusic: (value: boolean) => void;
    setBackground: (value: string) => void;
    setLimitTime: (value: number) => void;
    setLimitCards: (value: number) => void;
    setGameSetup: (value: boolean) => void;
    language: LanguageCode;
    multiLanguage: boolean;
    sounds: boolean;
    music: boolean;
    background: string;
    limitTime: number;
    limitCards: number;
    gameSetup: boolean;
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
        if (item) return Boolean(item);
        localStorage.setItem(key, String(defaultValue));
        return defaultValue;
    }
    const setDefaultNumber = (key: string, defaultValue: number): number => {
        const item = localStorage.getItem(key);
        if (item) return Number(item);
        localStorage.setItem(key, String(defaultValue));
        return defaultValue;
    }

    const [settings, setSettings] = useState({
        language: setDefaultString('language', 'en') as LanguageCode,
        multiLanguage: setDefaultBoolean('multiLanguage', true),
        sounds: setDefaultBoolean('sounds', true),
        music: setDefaultBoolean('music', true),
        background: setDefaultString('background', 'bg1'),
        limitTime: setDefaultNumber('limitTime', 15),
        limitCards: setDefaultNumber('limitCards', 15),
        gameSetup: setDefaultBoolean('gameSetup', true),
    })

    function setNewSettingValue(key: string, newValue: string | boolean | number) {
        localStorage.setItem(key, String(newValue))
        setSettings(prev => ({
            ...prev,
            [key]: newValue,
        }))
    }

    const value = {
        setLanguage: (newValue: LanguageCode) => setNewSettingValue('language', newValue),
        setMultiLanguage: (newValue: boolean) => setNewSettingValue('multiLanguage', newValue),
        setSounds: (newValue: boolean) => setNewSettingValue('sounds', newValue),
        setMusic: (newValue: boolean) => setNewSettingValue('music', newValue),
        setBackground: (newValue: string) => setNewSettingValue('background', newValue),
        setLimitTime: (newValue: number) => setNewSettingValue('limitTime', newValue),
        setLimitCards: (newValue: number) => setNewSettingValue('limitCards', newValue),
        setGameSetup: (newValue: boolean) => setNewSettingValue('gameSetup', newValue),
        ...settings
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