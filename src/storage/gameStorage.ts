import type { CardType } from "shared/utils/generateDeck";
import { create } from "zustand";

export type GameState = {
  deck: CardType[];
  currentCardIndex: number;
  phase: 'idle' | 'started' | 'waitingForMove' | 'flipping' | 'modal' | 'ended';
  setPhase: (state: 'idle' | 'started' | 'waitingForMove' | 'flipping' | 'modal' | 'ended') => void;
  infinityCards: boolean;
  setInfinityCards: (infinityCards: boolean) => void;
  setDeck: (deck: CardType[]) => void;
  nextCard: () => void;
  resetGame: () => void;
};

export const useGameStore = create<GameState>((set) => ({
  deck: [],
  currentCardIndex: 51,
  phase: 'idle',
  setPhase: (phase) => set({ phase }),
  infinityCards: false,
  setInfinityCards: (infinityCards) => set({ infinityCards }),
  setDeck: (deck) => set({ deck }),
  nextCard: () =>
    set((state) => ({
      currentCardIndex: state.currentCardIndex + 1,
    })),
  resetGame: () => set({ deck: [], currentCardIndex: 0 }),
}));


// export type GameState2 = {
//   deck: CardType[];
//   cardIndex: number;
//   infinityCards: boolean;
//   setInfinityCards: (infinityCards: boolean) => void;
//   setDeck: (deck: CardType[]) => void;
//   resetGame: () => void;

//   phase: 'idle' | 'started' | 'waitingForMove' | 'flipping' | 'modal' | 'ended';
//   setPhase: (state: 'idle' | 'started' | 'waitingForMove' | 'flipping' | 'modal' | 'ended') => void;

//   start: () => void;
//   flip: () => void;
//   next: () => void;
//   end: () => void;
//   restart: () => void;
// };

// export const useGameStore2 = create<GameState2>((set) => ({
//   deck: [],
//   cardIndex: 0,
//   infinityCards: false,
//   setInfinityCards: (infinityCards) => set({ infinityCards }),
//   setDeck: (deck) => set({ deck }),
//   resetGame: () => set({ deck: [], cardIndex: 0 }),

//   phase: 'idle',
//   setPhase: (state) => set({ state }),

//   start: () => set((state) => ({state: 'started'})),
//   flip: () => {},
//   next: () => set((state) => ({ cardIndex: state.cardIndex + 1 })),
//   end: () => {},
//   restart: () => {},
// }));
