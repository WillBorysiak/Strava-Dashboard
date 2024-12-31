import { IActivity } from "./Activity.interface";
import { IStats } from "./stats/Stats.interface";

export interface IStravaData {
  stats: IStats;
  activities: IActivity[];
  activities2: IActivity[];
}
