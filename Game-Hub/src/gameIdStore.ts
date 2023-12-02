import { create } from "zustand";

interface GameIdStore {
  gameId: number;
  gameSlug: string;
  setGameId: (gameId: number) => void;
  setGameSlug: (gameSlug: string) => void;
}

const useGameIdStore = create<GameIdStore>((set) => ({
  gameId: 0,
  gameSlug: "",
  setGameId: (gameId) => set({ gameId }),
  setGameSlug: (gameSlug) => set({ gameSlug }),
}));

export default useGameIdStore;
