import { useNativeArrow } from "@providers/NativeArrowProvider";
import { InfoWrapper, SettingWrapper, ToggleLabel, ToggleTooltip } from "./Settings.styled";
import { useNavigate } from "react-router-dom";
import { useEffect, useMemo } from "react";
import { useSettings } from "@providers/SettingProvider";
import { useLanguage } from "@providers/LanguageProvider";
import ToggleGroup from "./ToggleGroup";
import ThemeToggle from "@components/Toggle/ThemeToggle";
import { toast } from "sonner";
import { getToggletOptions } from "./toggleOptions";

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
                onTooltip={() => toast.info(translations.settings.musicTooltip)}
                options={toggleOptions.booleanOptions}
                defaultOption={audio.music}
                onOptionChange={(option) => audio.setMusic(option)}
            />
            <ToggleGroup
                label={translations.settings.sounds}
                onTooltip={() => toast.info(translations.settings.soundsTooltip)}
                options={toggleOptions.booleanOptions}
                defaultOption={audio.sounds}
                onOptionChange={(option) => audio.setSounds(option)}
            />
            <ToggleGroup
                label={translations.settings.multiLanguage}
                onTooltip={() => toast.info(translations.settings.multiLanguageTooltip)}
                options={toggleOptions.booleanOptions}
                defaultOption={language.multiLanguage}
                onOptionChange={(option) => language.setMultiLanguage(option)}
            />
            <ToggleGroup
                label={translations.settings.gameSetUp}
                onTooltip={() => toast.info(translations.settings.gameSetUpTooltip)}
                options={toggleOptions.booleanOptions}
                defaultOption={game.gameSetup}
                onOptionChange={(option) => game.setGameSetup(option)}
            />
            <ToggleGroup
                disabled={game.gameSetup}
                label={translations.settings.cardLimit}
                onTooltip={() => toast.info(translations.settings.cardLimitTooltip)}
                options={toggleOptions.cardLimit}
                defaultOption={game.limitCards}
                onOptionChange={(option) => game.setLimitCards(option)}
            />
            <ToggleGroup
                disabled={game.gameSetup}
                label={translations.settings.limitTime}
                onTooltip={() => toast.info(translations.settings.limitTimeTooltip)}
                options={toggleOptions.timeLimit}
                defaultOption={game.limitTime}
                onOptionChange={(option) => game.setLimitTime(option)}
            />
            <ToggleGroup
                label={translations.settings.language}
                onTooltip={() => toast.info(translations.settings.languageTooltip)}
                options={toggleOptions.language}
                defaultOption={language.language}
                onOptionChange={(option) => language.setLanguage(option)}
            />
            <InfoWrapper>
                <ToggleLabel
                    color={style.appTheme.fontColor}
                    $shadows={style.appTheme.textShadow}
                >
                    {translations.settings.background}
                </ToggleLabel>
                <ToggleTooltip
                    color={style.appTheme.fontColor}
                    onClick={() => toast.info(translations.settings.backgroundTooltip)}
                />
            </InfoWrapper>
            <ThemeToggle />
        </SettingWrapper>
    )
}

export default Settings;

