import { create } from "zustand";

import { IActivity } from "../../interfaces/IActivity";
import { Activity } from "../../models/activities/Activity";

interface RunningStore {
  runs: Activity[] | undefined;
  hasRuns: boolean;

  setRuns: (payload: IActivity[][]) => void;
  getRunsByYear: (year: number) => Activity[] | undefined;
}

export const useRunningStore = create<RunningStore>((set, get) => ({
  runs: undefined,
  hasRuns: false,

  setRuns: (payload: IActivity[][]) => {
    const runArrays: IActivity[] = (
      payload.flat(Infinity) as IActivity[]
    ).filter((activity) => activity.sport_type === "Run");

    const runData: Activity[] = runArrays.map(
      (activity) => new Activity(activity),
    );

    set(() => ({ runs: runData, hasRuns: true }));
  },

  getRunsByYear: (year: number) =>
    get().runs?.filter((run) => run.year === year),
}));
