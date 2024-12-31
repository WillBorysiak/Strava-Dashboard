import { create } from "zustand";

export enum SportEnum {
  running = "Running",
  hiking = "Hiking",
}

interface CoreStore {
  selectedSport: SportEnum;
  selectedYear: number;

  changeSelectedSport: (payload: SportEnum) => void;
  changeSelectedYear: (payload: number) => void;
}

export const useCoreStore = create<CoreStore>((set) => ({
  selectedSport: SportEnum.running,
  selectedYear: new Date().getFullYear(),

  changeSelectedSport: (payload: SportEnum) =>
    set(() => ({ selectedSport: payload })),
  changeSelectedYear: (payload: number) =>
    set(() => ({ selectedYear: payload })),
}));
