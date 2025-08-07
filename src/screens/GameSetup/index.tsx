import { useLanguage } from "@providers/LanguageProvider";
import { Description, InfoContainer, PlayButton, SetUpWrapper, Title, ToggleGroupContainer, ToggleLabel } from "./GameSetup.styled";
import { useNativeArrow } from "@providers/NativeArrowProvider";
import { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useSettings } from "@providers/SettingProvider";
import ToggleButton from "@components/Toggle/ToggleButton";
import { getToggletOptions } from "shared/utils/toggleOptions";
import { initialGame } from "@screens/Game/initialGame";
import { useGameStore } from "storage/gameStorage";

export function GameSetup() {
    const navigate = useNavigate();
    const { show } = useNativeArrow();
    const { translations } = useLanguage();
    const { style, game, language } = useSettings();

    const toggleOptions = useMemo(() => getToggletOptions(translations), [translations]);

    const setDeck = useGameStore.getState().setDeck

    useEffect(() => show(() => navigate('/')), [navigate]);
    return (
        <SetUpWrapper $color={style.appTheme.fontColor}>
            <InfoContainer>
                <Title>{translations.setup.title}</Title>
                {translations.setup.paragraphs.map((p, i) => <Description key={i}>{p}</Description>)}
            </InfoContainer>
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
            <PlayButton onClick={() => initialGame(game.limitCards, navigate, setDeck)}>
                {translations.setup.play}
            </PlayButton>
        </SetUpWrapper >
    )
}

export default GameSetup;
