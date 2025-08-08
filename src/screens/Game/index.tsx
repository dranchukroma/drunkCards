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
import Infinity from "@components/Icons/Infinity";
import { Modal } from "@components/Modal";

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
    useEffect(() => show(() => setPhase('modal')), [navigate]);

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

    const [cardFlipped, setCardFlipped] = useState<boolean>(false)

    useEffect(() => {
        if(phase === 'flipping'){
            setCardFlipped((prev) => !prev);
        }
    }, [phase]);

    // Recreate deck if it is empty
    useEffect(() => {
        if (deck.length === 0) {
            setDeck(generateDeck(game.limitCards));
            setInfinityCards(game.infinityCards);
        }
    }, [deck.length, game.limitCards]);

    // useEffect(() => console.log(phase), [phase]);

    const showCard = useCallback(() => {
        if (phase === 'flipping') return;
        setPhase('flipping');

        setTimeout(() => {
            setPhase('waitingForMove');
        }, 1000);
    }, [phase]);

    const hideCard = useCallback(() => {
        if (phase !== 'waitingForMove') return;
        setPhase('flipping');
        setTimeout(() => {
            if ((currentCardIndex + 1) >= deck.length) {
                if (game.infinityCards) {
                    playAgain()
                } else {
                    setPhase('modal');
                }
            } else {
                nextCard();
                setPhase('waitingForMove');
            }
        }, 1000);
    }, [phase]);

    const playAgain = () => {
        resetGame();
        setDeck(generateDeck(game.limitCards));
    }

    return (
        <GameWrapper>
            <TimerWidget gameMinutes={0.1}/>

            <Card
                appTheme={style.appTheme}
                isCardFliped={cardFlipped}
                isSlidingOut={false}
                hideCard={hideCard}
                showCard={showCard}
                card={deck[currentCardIndex]}
                zIndex={0}
            />

            <CardsLeft $color={style.appTheme.fontColor}>
                {infinityCards ? <Infinity /> : <p>{deck.length - (currentCardIndex)} {translations.game.cardLeft}</p>}
            </CardsLeft>

            {language.multiLanguage && (<LangWidgetContainer>
                <ToggleButton
                    options={getToggletOptions(translations).language}
                    defaultOption={language.language}
                    onOptionChange={language.setLanguage}
                />
            </LangWidgetContainer>)}

            <Modal
                open={phase === 'modal'}
                onOpenChange={() => {}} // To change
                // onOpenChange={setIsModalOpen}
                title={translations.game.EndGameModalTitle}
                description={translations.game.EndGameModalDescrition}
                onConfirm={playAgain}
                onCancel={() => {
                    setPhase('idle');
                    resetGame();
                    navigate('/');
                }}
                btn1Test={translations.game.CtaPlayAgain}
                btn2Test={translations.game.CtaFinishGame}
            />
        </GameWrapper>
    )
}

export default Game;
