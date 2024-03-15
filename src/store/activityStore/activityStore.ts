import { create } from "zustand";

import { IActivity } from "../../interfaces/IActivity";
import { Activity } from "../../models/activities/Activity";

interface ActivityStore {
  //running

  runs: Activity[] | undefined;
  hasRuns: boolean;

  setRuns: (payload: IActivity[][]) => void;
  getRunsByYear: (year: number) => Activity[] | undefined;

  // hiking

  hikes: Activity[] | undefined;
  hasHikes: boolean;

  setHikes: (payload: IActivity[][]) => void;
  getHikesByYear: (year: number) => Activity[] | undefined;
}

export const useActivityStore = create<ActivityStore>((set, get) => ({
  // running

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

  // hiking

  hikes: undefined,
  hasHikes: false,

  setHikes: (payload: IActivity[][]) => {
    const hikeArrays: IActivity[] = (
      payload.flat(Infinity) as IActivity[]
    ).filter((activity) => activity.sport_type === "Hike");

    const hikeData: Activity[] = hikeArrays.map(
      (activity) => new Activity(activity),
    );

    set(() => ({ hikes: hikeData, hasHikes: true }));
  },

  getHikesByYear: (year: number) =>
    get().hikes?.filter((hike) => hike.year === year),
}));
