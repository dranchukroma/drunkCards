import { useNativeArrow } from "@providers/NativeArrowProvider";
import { LangWidgetContainer, GameWrapper, CardsLeft } from "./Game.styled";
import { useNavigate } from "react-router-dom";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { getGamingMode } from "shared/utils/gamingMode";
import { useGameStore } from "storage/gameStorage";
import { getToggletOptions } from "shared/utils/toggleOptions";
import { useLanguage } from "@providers/LanguageProvider";
import { useSettings } from "@providers/SettingProvider";
import ToggleButton from "@components/Toggle/ToggleButton";
import TimerWidget from "@components/TimerWidget";
import Card from "./Card";
import { generateDeck } from "shared/utils/generateDeck";
import Infinity from "@components/Icons/Infinity";
import { Modal } from "@components/Modal";

export function Game() {
    const navigate = useNavigate();
    const { translations } = useLanguage();
    const { language, game, style } = useSettings();

    // якщо гру не стартували — переведемо на сетап
    const isGameStarted = getGamingMode();
    useEffect(() => {
        if (!isGameStarted) navigate("/setup");
    }, [, navigate]);

    // нативна “стрілка назад”: при натисканні — завершуємо гру
    const { show } = useNativeArrow();
    useEffect(() => {
        const dispose = show(() => setPhase('ended'));
        return dispose;
      }, []); 

    const {
        deck,
        currentCardIndex,
        nextCard,
        phase,
        setPhase,
        setDeck,
        infinityCards,
        setInfinityCards,
        resetGame,
    } = useGameStore();

    const [cardFlipped, setCardFlipped] = useState<boolean>(false);
    const [resetTimer, setResetTimer] = useState<boolean>(false);

    // контролюємо таймаути, аби чистити при анмаунті/зміні фази
    const timeoutRef = useRef<number | null>(null);
    const clearTimer = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
    };

    // flip від фази
    useEffect(() => {
        if (phase === 'flipping') {
            setCardFlipped((prev) => !prev);
        }
    }, [phase]);

    // ініціалізація колоди
    useEffect(() => {
        if (deck.length === 0) {
            setDeck(generateDeck(game.limitCards));
            setInfinityCards(game.infinityCards);
        }
    }, [deck.length, game.limitCards, game.infinityCards, setDeck, setInfinityCards]);

    // показати поточну картку (flip вперед)
    const showCard = useCallback(() => {
        if (phase === "flipping") return;
        setPhase("flipping");
        clearTimer();
        timeoutRef.current = window.setTimeout(() => {
            setPhase("waitingForMove");
            timeoutRef.current = null;
        }, 1000);
    }, [phase, setPhase]);

    // сховати картку (flip назад) і перейти до наступної/фіналу
    const hideCard = useCallback(() => {
        if (phase !== "waitingForMove") return;
        setPhase("flipping");
        clearTimer();
        timeoutRef.current = window.setTimeout(() => {
            const isLast = currentCardIndex + 1 >= deck.length;

            if (isLast) {
                if (game.infinityCards) {
                    playAgain();
                } else {
                    setPhase("ended");
                }
            } else {
                nextCard();
                setPhase("waitingForMove");
            }
            timeoutRef.current = null;
        }, 1000);
    }, [phase, currentCardIndex, deck.length, game.infinityCards, nextCard, setPhase]);


    const playAgain = useCallback(() => {
        clearTimer();
        resetGame();
        setDeck(generateDeck(game.limitCards));
        setResetTimer(true);
        setCardFlipped(false); // 🔧 важливо: повертаємо у вихідний стан
        setPhase("idle");
    }, [game.limitCards, resetGame, setDeck, setPhase]);

    useEffect(() => {
        return () => clearTimer(); // cleanup on unmount
    }, []);

    const cardsLeft = useMemo(() => Math.max(deck.length - currentCardIndex, 0), [deck.length, currentCardIndex]);

    return (
        <GameWrapper>
            <TimerWidget
                gameMinutes={game.limitTime}
                resetTimer={resetTimer}
                setResetTimer={setResetTimer}
            />

            <Card
                appTheme={style.appTheme}
                isCardFlipped={cardFlipped}
                hideCard={hideCard}
                showCard={showCard}
                card={deck[currentCardIndex]}
            />

            <CardsLeft $color={style.appTheme.fontColor}>
                {infinityCards ? <Infinity /> : <p>{cardsLeft} {translations.game.cardLeft}</p>}
            </CardsLeft>

            {language.multiLanguage && (
                <LangWidgetContainer>
                    <ToggleButton
                        options={getToggletOptions(translations).language}
                        defaultOption={language.language}
                        onOptionChange={language.setLanguage}
                    />
                </LangWidgetContainer>
            )}

            <Modal
                open={phase === 'ended'}
                onOpenChange={(open) => {
                    // якщо користувач закрив модалку свайпом/бекдропом
                    if (!open) {
                        setPhase("idle");
                    }
                }}
                title={translations.game.EndGameModalTitle}
                description={translations.game.EndGameModalDescrition}
                onConfirm={playAgain}
                onCancel={() => {
                    setPhase('idle');
                    resetGame();
                    setCardFlipped(false);
                    navigate('/');
                }}
                btn1Test={translations.game.CtaPlayAgain}
                btn2Test={translations.game.CtaFinishGame}
            />
        </GameWrapper>
    )
}

export default Game;
