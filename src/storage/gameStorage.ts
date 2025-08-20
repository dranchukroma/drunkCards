import type { CardType } from "shared/utils/generateDeck";
import { create } from "zustand";

export type GamePhase = 'idle' | 'waitingForMove' | 'flipping' | 'paused' | 'ended';

export type GameState = {
  deck: CardType[];
  currentCardIndex: number;
  phase: GamePhase;
  setPhase: (phase: GamePhase) => void;
  infinityCards: boolean;
  setInfinityCards: (v: boolean) => void;
  setDeck: (deck: CardType[]) => void;
  nextCard: () => void;
  resetGame: () => void;
};

export const useGameStore = create<GameState>((set) => ({
  deck: [],
  currentCardIndex: 0,
  phase: 'idle',
  setPhase: (phase) => set({ phase }),
  infinityCards: false,
  setInfinityCards: (v) => set({ infinityCards: v }),
  setDeck: (deck) => set({ deck, currentCardIndex: 0 }),
  nextCard: () =>
    set((state) => ({
      currentCardIndex: Math.min(
        state.currentCardIndex + 1,
        Math.max(state.deck.length - 1, 0)
      ),
    })),
  resetGame: () => set({ deck: [], currentCardIndex: 0, phase: 'idle' }),
}));
