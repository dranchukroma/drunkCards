import { useContext, createContext, useMemo } from "react";
import type { ReactNode } from 'react';
import { i18n } from "i18n";
import type { TranslationSchema } from "i18n/types";
import type { LanguageCode } from "i18n/types";
import { useSettings } from "./SettingProvider";


type LanguageContextType = {
    translations: TranslationSchema;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

type LanguageProviderProps = {
    children: ReactNode,
}

export function LanguageProvider({ children }: LanguageProviderProps) {
    const { language } = useSettings();
    const currentLanguage: LanguageCode = language;

    const translations = useMemo(() => {
        return i18n[currentLanguage] ?? i18n.en
      }, [currentLanguage])

    const value = {
        translations,
    }

    console.log(currentLanguage)
    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    )
}

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageContext')
    }
    return context;
}