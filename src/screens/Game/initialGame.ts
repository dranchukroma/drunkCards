import { setGamingMode } from "shared/utils/gamingMode";
import { generateDeck, type CardType } from "shared/utils/generateDeck";

export const initialGame = (
  cards: number,
  navigate: (path: string) => void,
  setNewDeck: (newDeck: CardType[]) => void,
  setInfinityCards: () => void,
) => {
  setGamingMode(true);
  const deck = generateDeck(cards);
  setNewDeck(deck);
  setInfinityCards()
  navigate("/game");
};
