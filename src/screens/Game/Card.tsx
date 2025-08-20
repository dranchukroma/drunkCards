import type { AppThemeType } from "@styles/theme";
import { CardBack, CardFront, CardInner, CardRank, CardRule, CardWrapper, RankContainer, Suit } from "./Game.styled";
import type { CardNumber, CardType } from "shared/utils/generateDeck";
import { useLanguage } from "@providers/LanguageProvider";
import Diamonds from "@components/Icons/Diamonds";
import Clubs from "@components/Icons/Clubs";
import Hearts from "@components/Icons/Hearts";
import Spades from "@components/Icons/Spades";
import { type ReactNode } from "react";

type CardProps = {
    appTheme: AppThemeType;
    isCardFlipped: boolean;
    hideCard: () => void;
    showCard: () => void;
    card?: CardType;
};

function Card({ appTheme, isCardFlipped, card = { cardNumber: 14, suit: 'diamonds' }, hideCard, showCard }: CardProps) {
    const { translations } = useLanguage();

    const cardColor = (suit: string): string => {
        switch (suit) {
            case 'diamonds': return 'red';
            case 'clubs': return 'black';
            case 'hearts': return 'red';
            case 'spades': return 'black';
        }
        return 'black';
    }

    const suit = (suit: string, color: string): ReactNode => {
        switch (suit) {
            case 'diamonds': return <Diamonds fillColor={color} />
            case 'clubs': return <Clubs fillColor={color} />
            case 'hearts': return <Hearts fillColor={color} />
            case 'spades': return <Spades fillColor={color} />
        }
    }

    const rank = (num: number): string => {
        if (num <= 10) return String(num);
        switch (num) {
            case 11: return 'J';
            case 12: return 'Q';
            case 13: return 'K';
            case 14: return 'A';
            default: return 'A';
        }
    }

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
                    <RankContainer $position={'top'} $color={cardColor(card?.suit)}>
                        <CardRank>{rank(card?.cardNumber)}</CardRank>
                        <Suit>{suit(card?.suit, cardColor(card?.suit))}</Suit>
                    </RankContainer>
                    <CardRule $color={cardColor(card?.suit)}>
                        {translations.game.cardAction[`c${card?.cardNumber as CardNumber}`]}
                    </CardRule>
                    <RankContainer $position={'bottom'} $color={cardColor(card?.suit)}>
                        <CardRank>{rank(card?.cardNumber)}</CardRank>
                        <Suit>{suit(card?.suit, cardColor(card?.suit))}</Suit>
                    </RankContainer>
                </CardBack>
            </CardInner>
        </CardWrapper>
    );
}

export default Card;
