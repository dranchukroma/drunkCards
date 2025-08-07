import type { AppThemeType } from "@styles/theme";
import { CardBack, CardFront, CardInner, CardWrapper } from "./Game.styled";
import type { CardType } from "shared/utils/generateDeck";
import { useLanguage } from "@providers/LanguageProvider";

type CardProps = {
    appTheme: AppThemeType;
    isCardFliped: boolean;
    isSlidingOut: boolean;
    hideCard: () => void;
    showCard: () => void;
    zIndex: number;
    card: CardType;
}

function Card({ appTheme, zIndex, isCardFliped, isSlidingOut, card, hideCard, showCard }: CardProps) {
    const { translations } = useLanguage();

    return (
        <CardWrapper
            $zIndex={zIndex}
        >
            <CardInner
                $flipped={isCardFliped}
                $shadows={appTheme.boxShadow}
                $slight={isSlidingOut}
                onClick={isCardFliped ? hideCard : showCard}
            >
                <CardFront
                    $bgColor={appTheme.uiSelected}
                    $color={appTheme.fontColor}
                >
                    <p>{translations.game.showCard}</p>
                </CardFront>
                <CardBack
                    $bgColor={appTheme.uiSelected}
                    $color={appTheme.fontColor}
                >
                    <p>{card?.cardNumber} {card?.suit}</p>
                </CardBack>
            </CardInner>
        </CardWrapper >

    )
}

export default Card;