import { generateDeck, type CardType } from "shared/utils/generateDeck";

export const initialGame = (
  cards: number,
  navigate: (path: string) => void,
  setNewDeck: (newDeck: CardType[]) => void,
  setInfinityCards: (value: boolean) => void, // 🔒 уточнений тип
  setGamingMode: (value: boolean) => void, // 🔒 уточнений тип
  infinity = false,                          // зручно передати явно
) => {
  setGamingMode(true);
  const deck = generateDeck(cards);
  setNewDeck(deck);
  setInfinityCards(infinity);
  navigate("/game");
};
