import { useLanguage } from "@providers/LanguageProvider";
import { Description, PlayButton, SetUpWrapper, Title, ToggleGroupContainer, ToggleLabel } from "./GameSetup.styled";
import { useNativeArrow } from "@providers/NativeArrowProvider";
import { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useSettings } from "@providers/SettingProvider";
import ToggleButton from "@components/Toggle/ToggleButton";
import { getToggletOptions } from "shared/utils/toggleOptions";

type GameSetupProps = {

}

export function GameSetup({ }: GameSetupProps) {
    const navigate = useNavigate();
    const { show } = useNativeArrow();
    const { translations } = useLanguage();
    const { style, game, language } = useSettings();

    const toggleOptions = useMemo(() => getToggletOptions(translations), [translations]);

    useEffect(() => show(() => navigate(-1)), [navigate]);
    return (
        <SetUpWrapper $color={style.appTheme.fontColor}>
            <Title>{translations.setup.title}</Title>
            {translations.setup.paragraphs.map((p, i) => <Description key={i}>{p}</Description>)}
            <ToggleGroupContainer>
                <ToggleLabel $shadows={style.appTheme.textShadow}>
                    {translations.settings.cardLimit}
                </ToggleLabel>
                <ToggleButton
                    options={toggleOptions.cardLimit}
                    defaultOption={game.limitCards}
                    onOptionChange={(option) => game.setLimitCards(option)}
                />
            </ToggleGroupContainer>
            <ToggleGroupContainer>
                <ToggleLabel $shadows={style.appTheme.textShadow}>
                    {translations.settings.limitTime}
                </ToggleLabel>
                <ToggleButton
                    options={toggleOptions.timeLimit}
                    defaultOption={game.limitTime}
                    onOptionChange={(option) => game.setLimitTime(option)}
                />
            </ToggleGroupContainer>
            <ToggleGroupContainer>
                <ToggleLabel $shadows={style.appTheme.textShadow}>
                    {translations.settings.limitTime}
                </ToggleLabel>
                <ToggleButton
                    options={toggleOptions.booleanOptions}
                    defaultOption={language.multiLanguage}
                    onOptionChange={(option) => language.setMultiLanguage(option)}
                />
            </ToggleGroupContainer >
            <PlayButton onClick={() => navigate('/game')}>
                {translations.setup.play}
            </PlayButton>
        </SetUpWrapper >
    )
}

export default GameSetup;
