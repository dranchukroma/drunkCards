import { shuffleDeck } from "./shuffle";

shuffleDeck

export type Suit = 'hearts' | 'diamonds' | 'clubs' | 'spades';

export type CardType = {
    cardNumber: number;
    suit: Suit; 
}

export type CardNumber = 2|3|4|5|6|7|8|9|10|11|12|13|14;

const suits: Suit[] = ['hearts', 'diamonds', 'clubs', 'spades'];

export const generateDeck = (totalCards: number): CardType[] => {
    let cardDeck: CardType[] = [];
    if((totalCards % 4) !== 0) return cardDeck;

    const firstCardNumber = 15 - (totalCards / 4);
    const lastCardNumber = 14;

    for(const suit of suits){
        for(let cardNumber = firstCardNumber; cardNumber <= lastCardNumber; cardNumber++){
            cardDeck.push({
                cardNumber,
                suit,
            })
        }
    }
    cardDeck = shuffleDeck(cardDeck);
    return cardDeck;
}