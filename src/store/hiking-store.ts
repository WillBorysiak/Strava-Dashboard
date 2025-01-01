import { create } from "zustand";

import { IActivity } from "../interfaces/Activity.interface";
import { Activity } from "../models/activities/Activity.model";

interface HikingStore {
  hikes: Activity[] | undefined;
  hasHikes: boolean;

  setHikes: (payload: IActivity[]) => void;
  getHikesByYear: (year: number) => Activity[] | undefined;
}

export const useHikingStore = create<HikingStore>((set, get) => ({
  hikes: undefined,
  hasHikes: false,

  setHikes: (iActivities: IActivity[]) => {
    const hikeArray: IActivity[] = iActivities.filter(
      (activity) => activity.sport_type === "Hike",
    );
    const hikes: Activity[] = hikeArray.map(
      (activity) => new Activity(activity),
    );

    set(() => ({ hikes, hasHikes: true }));
  },

  getHikesByYear: (year: number) =>
    get().hikes?.filter((hike) => hike.year === year),
}));
