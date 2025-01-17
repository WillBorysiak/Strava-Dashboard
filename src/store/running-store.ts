import { create } from "zustand";

import { IActivity } from "../interfaces/Activity.interface";
import { Activity } from "../models/activities/Activity.model";
import { Stats } from "../models/stats/Stats.model";

interface RunningStore {
  runs: Activity[] | [];
  hasRuns: boolean;

  setRuns: (payload: IActivity[]) => void;
  getRunsByWeek: (week: number, year: number) => Activity[] | [];
  getRunsByYear: (year: number) => Activity[] | [];
  getStatsByYear: (year: number) => Stats;
}

export const useRunningStore = create<RunningStore>((set, get) => ({
  runs: [],
  hasRuns: false,

  setRuns: (iActivities: IActivity[]) => {
    const runArray: IActivity[] = iActivities.filter(
      (activity) => activity.sport_type === "Run",
    );

    const runs: Activity[] = runArray.map((activity) => new Activity(activity));

    set(() => ({ runs, hasRuns: true }));
  },
  getRunsByWeek: (week: number, year: number) => {
    const runs = get().runs;

    if (!runs) return [];

    const runsByWeek = runs?.filter(
      (run) => run.week === week && run.year === year,
    );

    return runsByWeek;
  },
  getRunsByYear: (year: number) => {
    const runs = get().runs;

    if (!runs) return [];

    const runsByYear = runs?.filter((run) => run.year === year);

    return runsByYear;
  },
  getStatsByYear: (year: number) => {
    const runsByYear = get().getRunsByYear(year);
    const stats = new Stats(runsByYear);

    return stats;
  },
}));
