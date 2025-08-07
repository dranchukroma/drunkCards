import { shuffleDeck } from "./shuffle";

shuffleDeck

type Suit = 'hearts' | 'diamonds' | 'clubs' | 'spades';

export type CardType = {
    cardNumber: number;
    suit: Suit; 
}

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