import { create } from "zustand";

type State = {
  backgroundColor: string;
};

type Action = {
  setBackgroundColor: (color: string) => void;
};

export const useBackgroundColor = create<State & Action>((set) => ({
  backgroundColor: "oklch(0.623 0.214 259.815)",
  setBackgroundColor: (color) => set({ backgroundColor: color }),
}));
