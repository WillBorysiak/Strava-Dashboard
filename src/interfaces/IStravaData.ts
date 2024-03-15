import { IActivity } from "./IActivity";
import { IStats } from "./stats/IStats";

export interface IStravaData {
  stats: IStats;
  activities: IActivity[];
  activities2: IActivity[];
}
