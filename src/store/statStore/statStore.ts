import { create } from "zustand";

import { Stats } from "../../models/stats/Stats";
import { IStats } from "../../interfaces/stats/IStats";

interface StatStore {
  stats: Stats | undefined;
  hasStats: boolean;

  setStats: (payload: IStats) => void;
}

export const useStatStore = create<StatStore>((set, get) => ({
  stats: undefined,
  hasStats: false,

  setStats: (payload: IStats) => {
    const runningTotals = payload.all_run_totals;
    const statsData: Stats = new Stats(runningTotals);

    set(() => ({ stats: statsData, hasStats: true }));
  },
}));
