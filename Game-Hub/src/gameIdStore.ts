import { create } from "zustand";

interface GameIdStore {
  gameId: number;
  setGameId: (gameId: number) => void;
}

const useGameIdStore = create<GameIdStore>((set) => ({
  gameId: 0,
  setGameId: (gameId) => set({ gameId }),
}));

export default useGameIdStore;
