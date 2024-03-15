import { create } from "zustand";

export enum SportEnum {
  running = "Running",
  hiking = "Hiking",
}

interface CoreStore {
  selectedSport: SportEnum;
  changeSelectedSport: (payload: SportEnum) => void;

  selectedYear: number;
  changeSelectedYear: (payload: number) => void;
}

export const useCoreStore = create<CoreStore>((set) => ({
  selectedSport: SportEnum.running,
  changeSelectedSport: (payload: SportEnum) =>
    set(() => ({ selectedSport: payload })),

  selectedYear: new Date().getFullYear(),
  changeSelectedYear: (payload: number) =>
    set(() => ({ selectedYear: payload })),
}));
