import { useLanguage } from "@providers/LanguageProvider";
import { Description, InfoContainer, PlayButton, SetUpWrapper, Title, TitleWrapper, ToggleGroupContainer, ToggleLabel } from "./GameSetup.styled";
import { useNativeArrow } from "@providers/NativeArrowProvider";
import { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useSettings } from "@providers/SettingProvider";
import ToggleButton from "@components/Toggle/ToggleButton";
import { getToggletOptions } from "shared/utils/toggleOptions";
import { initialGame } from "@screens/Game/initialGame";
import { useGameStore } from "storage/gameStorage";
import Tooltip from "@components/Tooltip";
import { toast } from "sonner";

export function GameSetup() {
    const navigate = useNavigate();
    const { show } = useNativeArrow();
    const { translations } = useLanguage();
    const { style, game, language } = useSettings();

    const toggleOptions = useMemo(() => getToggletOptions(translations), [translations]);

    const setDeck = useGameStore.getState().setDeck
    const setInfinityCards = useGameStore.getState().setInfinityCards

    useEffect(() => show(() => navigate('/')), [navigate]);
    return (
        <SetUpWrapper $color={style.appTheme.fontColor}>
            <InfoContainer>
                <TitleWrapper>
                    <Title>{translations.setup.title}</Title>
                    <Tooltip
                        color={style.appTheme.fontColor}
                        onClick={() => toast.info(translations.setup.setupScreen)}
                    />
                </TitleWrapper>

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
                    {"Infinity cards"}
                </ToggleLabel>
                <ToggleButton
                    options={toggleOptions.booleanOptions}
                    defaultOption={game.infinityCards}
                    onOptionChange={(option) => game.setInfinityCards(option)}
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
                    {"Infinity time"}
                </ToggleLabel>
                <ToggleButton
                    options={toggleOptions.booleanOptions}
                    defaultOption={game.infinityTime}
                    onOptionChange={(option) => game.setInfinityTime(option)}
                />
            </ToggleGroupContainer>
            <ToggleGroupContainer>
                <ToggleLabel $shadows={style.appTheme.textShadow}>
                    {translations.settings.multiLanguage}
                </ToggleLabel>
                <ToggleButton
                    options={toggleOptions.booleanOptions}
                    defaultOption={language.multiLanguage}
                    onOptionChange={(option) => language.setMultiLanguage(option)}
                />
            </ToggleGroupContainer >
            <PlayButton onClick={() => initialGame(game.limitCards, navigate, setDeck, () => setInfinityCards(game.infinityCards), game.setGamingMode)}>
                {translations.setup.play}
            </PlayButton>
        </SetUpWrapper >
    )
}

export default GameSetup;
