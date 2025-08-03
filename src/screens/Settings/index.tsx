import { useNativeArrow } from "@providers/NativeArrowProvider";
import { SettingWrapper } from "./Settings.styled";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSettings } from "@providers/SettingProvider";
import { useLanguage } from "@providers/LanguageProvider";
import { options } from "./toggleOptions";
import SettingOption from "./SettingOption";

export function Settings() {
    const {
        setLimitCards, limitCards,
        setLanguage, language,
        setMultiLanguage, multiLanguage,
        setSounds, sounds,
        setMusic, music,
        setBackground, background,
        setLimitTime, limitTime,
        setGameSetup, gameSetup,
    } = useSettings()
    const { translations } = useLanguage()
    const navigate = useNavigate();

    const { show } = useNativeArrow();
    useEffect(() => show(() => navigate(-1)), []);


    return (
        <SettingWrapper>
            <SettingOption
                copy={translations.settings.music}
                options={[
                    {
                        display: translations.settings.yesOption,
                        value: true,
                    },
                    {
                        display: translations.settings.noOption,
                        value: false,
                    }
                ]}
                defaultOption={music}
                onOptionChange={(option) => setMusic(option)}
            />
            <SettingOption
                copy={translations.settings.sounds}
                options={[
                    {
                        display: translations.settings.yesOption,
                        value: true,
                    },
                    {
                        display: translations.settings.noOption,
                        value: false,
                    }
                ]}
                defaultOption={sounds}
                onOptionChange={(option) => setSounds(option)}
            />
            <SettingOption
                copy={translations.settings.multiLanguage}
                options={[
                    {
                        display: translations.settings.yesOption,
                        value: true,
                    },
                    {
                        display: translations.settings.noOption,
                        value: false,
                    }
                ]}
                defaultOption={multiLanguage}
                onOptionChange={(option) => setMultiLanguage(option)}
            />
            <SettingOption
                copy={translations.settings.gameSetUp}
                options={[
                    {
                        display: translations.settings.yesOption,
                        value: true,
                    },
                    {
                        display: translations.settings.noOption,
                        value: false,
                    }
                ]}
                defaultOption={gameSetup}
                onOptionChange={(option) => setGameSetup(option)}
            />
            <SettingOption
                copy={translations.settings.cardLimit}
                options={options.cardLimit}
                defaultOption={limitCards}
                onOptionChange={(option) => setLimitCards(option)}
            />
            <SettingOption
                copy={translations.settings.limitTime}
                options={options.timeLimit}
                defaultOption={limitTime}
                onOptionChange={(option) => setLimitTime(option)}
            />
            <SettingOption
                copy={translations.settings.language}
                options={options.language}
                defaultOption={language}
                onOptionChange={(option) => setLanguage(option)}
            />

        </SettingWrapper>
    )
}

export default Settings;
