import type { AppThemeType } from "@styles/theme";
import { CardBack, CardFront, CardInner, CardWrapper } from "./Game.styled";
import type { CardType } from "shared/utils/generateDeck";
import { useLanguage } from "@providers/LanguageProvider";

type CardProps = {
    appTheme: AppThemeType;
    isCardFlipped: boolean;        // 🔤
    hideCard: () => void;
    showCard: () => void;
    card?: CardType;               // 🔒 безпечний тип
};

function Card({ appTheme, isCardFlipped, card, hideCard, showCard }: CardProps) {
    const { translations } = useLanguage();

    return (
        <CardWrapper>
            <CardInner
                $flipped={isCardFlipped}
                $shadows={appTheme.boxShadow}
                onClick={isCardFlipped ? hideCard : showCard}
            >
                <CardFront $bgColor={appTheme.uiSelected} $color={appTheme.fontColor}>
                    <p>{translations.game.showCard}</p>
                </CardFront>
                <CardBack $bgColor={appTheme.uiSelected} $color={appTheme.fontColor}>
                    <p>{card ? `${card.cardNumber} ${card.suit}` : "—"}</p>
                </CardBack>
            </CardInner>
        </CardWrapper>
    );
}

export default Card;
