import { useNativeArrow } from "@providers/NativeArrowProvider";
import { SettingWrapper } from "./Settings.styled";
import { useNavigate } from "react-router-dom";
import { useEffect, useMemo } from "react";
import { useSettings } from "@providers/SettingProvider";
import { useLanguage } from "@providers/LanguageProvider";
import ToggleGroup from "./ToggleGroup";
import type { LanguageCode, TranslationSchema } from "i18n/types";

export function Settings() {
    const { audio, game, language, style } = useSettings()
    const { translations } = useLanguage()
    const navigate = useNavigate();

    const { show } = useNativeArrow();
    useEffect(() => show(() => navigate(-1)), [navigate]);

    const toggleOptions = useMemo(() => getToggletOptions(translations), [translations]);

    return (
        <SettingWrapper>
            <ToggleGroup
                label={translations.settings.music}
                options={toggleOptions.booleanOptions}
                defaultOption={audio.music}
                onOptionChange={(option) => audio.setMusic(option)}
            />
            <ToggleGroup
                label={translations.settings.sounds}
                options={toggleOptions.booleanOptions}
                defaultOption={audio.sounds}
                onOptionChange={(option) => audio.setSounds(option)}
            />
            <ToggleGroup
                label={translations.settings.multiLanguage}
                options={toggleOptions.booleanOptions}
                defaultOption={language.multiLanguage}
                onOptionChange={(option) => language.setMultiLanguage(option)}
            />
            <ToggleGroup
                label={translations.settings.gameSetUp}
                options={toggleOptions.booleanOptions}
                defaultOption={game.gameSetup}
                onOptionChange={(option) => game.setGameSetup(option)}
            />
            <ToggleGroup
                label={translations.settings.cardLimit}
                options={toggleOptions.cardLimit}
                defaultOption={game.limitCards}
                onOptionChange={(option) => game.setLimitCards(option)}
            />
            <ToggleGroup
                label={translations.settings.limitTime}
                options={toggleOptions.timeLimit}
                defaultOption={game.limitTime}
                onOptionChange={(option) => game.setLimitTime(option)}
            />
            <ToggleGroup
                label={translations.settings.language}
                options={toggleOptions.language}
                defaultOption={language.language}
                onOptionChange={(option) => language.setLanguage(option)}
            />

        </SettingWrapper>
    )
}

export default Settings;

const getToggletOptions = (t: TranslationSchema) => {
    return {
        cardLimit: [
            { display: '36', value: 36 },
            { display: '52', value: 52, },
            { display: 'ꝏ', value: -1, },
        ],
        timeLimit: [
            { display: '30', value: 30 },
            { display: '60', value: 60, },
            { display: '90', value: 90, },
            { display: 'ꝏ', value: -1, },
        ],
        language: [
            { display: '🇺🇸', value: "en" },
            { display: '🇵🇱', value: "pl" },
            { display: '🇺🇦', value: "uk" },
        ] satisfies Array<{ display: string, value: LanguageCode }>,

        booleanOptions: [
            { display: t.settings.yesOption, value: true },
            { display: t.settings.noOption, value: false },
        ] satisfies Array<{ display: string, value: boolean }>,
    }
}