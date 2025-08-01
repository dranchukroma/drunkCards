import type { ReactNode } from "react";
import { SettingsProvider } from "./SettingProvider";
import { LanguageProvider } from "./LanguageProvider";
import { NativeArrowProvider } from "./NativeArrowProvider";

type AppProviderProps = {
    children: ReactNode;
}

function AppProvider({ children }: AppProviderProps) {
    return (
        <NativeArrowProvider>
            <SettingsProvider>
                <LanguageProvider>
                    {children}
                </LanguageProvider>
            </SettingsProvider>
        </NativeArrowProvider>
    )
}

export default AppProvider;