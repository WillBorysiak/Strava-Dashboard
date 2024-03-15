import { create } from "zustand";

interface CoreStore {
  selectedYear: number;
  changeSelectedYear: (payload: number) => void;
}

export const useCoreStore = create<CoreStore>((set) => ({
  selectedYear: new Date().getFullYear(),
  changeSelectedYear: (payload: number) =>
    set(() => ({ selectedYear: payload })),
}));
