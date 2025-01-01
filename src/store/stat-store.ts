import { create } from "zustand";

import { Stats } from "../models/stats/Stats.model";
import { IStats } from "../interfaces/stats/Stats.interface";

interface StatStore {
  stats: Stats | undefined;
  hasStats: boolean;

  setStats: (payload: IStats) => void;
}

export const useStatStore = create<StatStore>((set, get) => ({
  stats: undefined,
  hasStats: false,

  setStats: (iStats: IStats) => {
    const runningTotals = iStats.all_run_totals;
    const stats: Stats = new Stats(runningTotals);

    set(() => ({ stats, hasStats: true }));
  },
}));
