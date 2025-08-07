import { setGamingMode } from "shared/utils/gamingMode";
import { generateDeck, type Card } from "shared/utils/generateDeck";

export const initialGame = (cards: number, navigate: (path: string) => void, setNewDeck: (newDeck: Card[]) => void) => {
    setGamingMode(true);
    const deck = generateDeck(cards);
    setNewDeck(deck);
    navigate('/game');
}