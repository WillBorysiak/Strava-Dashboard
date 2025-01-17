import { create } from "zustand";

import { IActivity } from "../interfaces/Activity.interface";
import { Activity } from "../models/activities/Activity.model";
import { Stats } from "../models/stats/Stats.model";

interface HikingStore {
  hikes: Activity[] | [];
  hasHikes: boolean;

  setHikes: (payload: IActivity[]) => void;
  getHikesByWeek: (week: number, year: number) => Activity[] | [];
  getHikesByYear: (year: number) => Activity[] | [];
  getStatsByYear: (year: number) => Stats;
}

export const useHikingStore = create<HikingStore>((set, get) => ({
  hikes: [],
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
  getHikesByWeek: (week: number, year: number) => {
    const hikes = get().hikes;

    if (!hikes) return [];

    const hikesByWeek = hikes?.filter(
      (hike) => hike.week === week && hike.year === year,
    );

    return hikesByWeek;
  },
  getHikesByYear: (year: number) => {
    const hikes = get().hikes;

    if (!hikes) return [];

    const hikesByYear = hikes?.filter((hike) => hike.year === year);

    return hikesByYear;
  },
  getStatsByYear: (year: number) => {
    const hikesByYear = get().getHikesByYear(year);
    const stats = new Stats(hikesByYear);

    return stats;
  },
}));
