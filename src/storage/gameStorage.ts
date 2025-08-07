import type { CardType } from "shared/utils/generateDeck";
import { create } from "zustand";

export type GameState = {
    deck: CardType[];
    currentCardIndex: number;
    infinityCards: boolean;
    infinityTime: boolean;
    setDeck: (deck: CardType[]) => void;
    nextCard: () => void;
    resetGame: () => void;
}

export const useGameStore = create<GameState>((set) => ({
    deck: [],
    currentCardIndex: 0,
    infinityCards: false,
    infinityTime: false,
    setDeck: (deck) => set({ deck }),
    nextCard: () => set((state) => ({
      currentCardIndex: state.currentCardIndex + 1
    })),
    resetGame: () => set({ deck: [], currentCardIndex: 0 }),
  }));