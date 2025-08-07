import { useNativeArrow } from "@providers/NativeArrowProvider";
import { LangWidgetContainer, GameWrapper, CardsLeft } from "./Game.styled";
import { useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { getGamingMode } from "shared/utils/gamingMode";
import { useGameStore } from "storage/gameStorage";
import { getToggletOptions } from "shared/utils/toggleOptions";
import { useLanguage } from "@providers/LanguageProvider";
import { useSettings } from "@providers/SettingProvider";
import ToggleButton from "@components/Toggle/ToggleButton";
import TimerWidget from "@components/TimerWidget";
import Card from "./Card";
import { generateDeck } from "shared/utils/generateDeck";

export function Game() {
    const navigate = useNavigate();
    const { translations } = useLanguage();
    const { language, game, style } = useSettings();

    // Go to set up if isGameStarted is not true
    const isGameStarted = getGamingMode();
    useEffect(() => {
        if (!isGameStarted) {
            navigate('/setup');
        }
    }, [isGameStarted, navigate]);

    // Use navigate arrow
    const { show } = useNativeArrow();
    useEffect(() => show(() => navigate('/setup')), [navigate]);

    const {
        deck,
        currentCardIndex,
        nextCard,
        setDeck
    } = useGameStore();

    // Recreate deck if it is empty
    useEffect(() => {
        if (deck.length === 0) {
            setDeck(generateDeck(game.limitCards));
        }
    }, [deck.length, game.limitCards, setDeck]);

    // Gamin states
    const [startTimer, setStartTimer] = useState(false);
    const [cardUsed, setCardUsed] = useState(0);
    const [isCardFliped, setIsCardFliped] = useState(false);
    const [isSlidingOut, setIsSlidingOut] = useState(false);
    const [isCardAnimating, setIsCardAnimating] = useState(false)

    const flags = getToggletOptions(translations).language;


    const showCard = useCallback(() => {
        if (isCardAnimating) return;
        setIsCardAnimating(true);

        if (!startTimer) {
            setStartTimer(true);
        }
        setIsCardFliped(true);

        setTimeout(() => {
            setIsCardAnimating(false);
        }, 1000);
    }, [startTimer, isCardAnimating]);

    const hideCard = useCallback(() => {
        if (isCardAnimating) return;
        setIsCardAnimating(true);

        setIsSlidingOut(true);
        setIsCardFliped(false);
        setTimeout(() => {
            nextCard();
            setCardUsed((prev) => prev + 1);
            setIsCardAnimating(false);
        }, 1000);
    }, [isCardAnimating, nextCard]);

    const gameEndModal = () => {

    }
    return (
        <GameWrapper>
            <TimerWidget
                gameMinutes={game.limitTime}
                showEndGameModal={gameEndModal}
                startTimer={startTimer}
            />

            <Card
                appTheme={style.appTheme}
                isCardFliped={isCardFliped}
                isSlidingOut={isSlidingOut}
                hideCard={hideCard}
                showCard={showCard}
                card={deck[currentCardIndex]}
                zIndex={1}
            />

            <CardsLeft $color={style.appTheme.fontColor}>
                <p>{deck.length - cardUsed} {translations.game.cardLeft}</p>
            </CardsLeft>

            <LangWidgetContainer>
                <ToggleButton
                    options={flags}
                    defaultOption={language.language}
                    onOptionChange={language.setLanguage}
                />
            </LangWidgetContainer>
        </GameWrapper>
    )
}

export default Game;
