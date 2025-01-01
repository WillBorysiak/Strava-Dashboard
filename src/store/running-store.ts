import { create } from "zustand";

import { IActivity } from "../interfaces/Activity.interface";
import { Activity } from "../models/activities/Activity.model";

interface RunningStore {
  runs: Activity[] | undefined;
  hasRuns: boolean;

  setRuns: (payload: IActivity[]) => void;
  getRunsByYear: (year: number) => Activity[] | undefined;
}

export const useRunningStore = create<RunningStore>((set, get) => ({
  runs: undefined,
  hasRuns: false,

  setRuns: (iActivities: IActivity[]) => {
    const runArray: IActivity[] = iActivities.filter(
      (activity) => activity.sport_type === "Run",
    );
    const runs: Activity[] = runArray.map((activity) => new Activity(activity));

    set(() => ({ runs, hasRuns: true }));
  },

  getRunsByYear: (year: number) =>
    get().runs?.filter((run) => run.year === year),
}));
