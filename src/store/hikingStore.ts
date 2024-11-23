import { create } from "zustand";

import { IActivity } from "../interfaces/IActivity";
import { Activity } from "../models/activities/Activity";

interface HikingStore {
  hikes: Activity[] | undefined;
  hasHikes: boolean;

  setHikes: (payload: IActivity[][]) => void;
  getHikesByYear: (year: number) => Activity[] | undefined;
}

export const useHikingStore = create<HikingStore>((set, get) => ({
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
