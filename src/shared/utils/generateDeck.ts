import { shuffleDeck } from "./shuffleDeck";

export type Suit = 'hearts' | 'diamonds' | 'clubs' | 'spades';
export type CardNumber = 2|3|4|5|6|7|8|9|10|11|12|13|14;
export type CardType = {
    cardNumber: CardNumber;
    suit: Suit; 
}

const suits: Suit[] = ['hearts', 'diamonds', 'clubs', 'spades'];

export const generateDeck = (totalCards: number): CardType[] => {
    if (totalCards !== 36 && totalCards !== 52) return [];

    let cardDeck: CardType[] = [];
    if((totalCards % 4) !== 0) return cardDeck;

    const firstCardNumber = 15 - (totalCards / 4) as CardNumber;
    const lastCardNumber = 14 as CardNumber;

    for(const suit of suits){
        for(let cardNumber = firstCardNumber; cardNumber <= lastCardNumber; cardNumber++){
            cardDeck.push({ cardNumber, suit })
        }
    }
    
    return shuffleDeck(cardDeck);
}