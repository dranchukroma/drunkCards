import type { ReactNode } from "react";
import { SettingsProvider } from "./SettingProvider";
import { LanguageProvider } from "./LanguageProvider";

type AppProviderProps = {
    children: ReactNode;
}

function AppProvider ({ children }: AppProviderProps) {
    return (
        <SettingsProvider>
            <LanguageProvider>
                {children}
            </LanguageProvider>
        </SettingsProvider>
    )
}

export default AppProvider;