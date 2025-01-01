import {
  generateStatsCount,
  generateStatsDistance,
  generateStatsElevation,
  generateStatsMovingTime,
} from "../../helpers/data/generate-stats";
import { Activity } from "../activities/Activity.model";

export class Stats {
  count: number;
  distance: string;
  movingTime: string;
  elevationGain: string;

  constructor(activities: Activity[] | []) {
    this.count = generateStatsCount(activities);
    this.distance = generateStatsDistance(activities);
    this.movingTime = generateStatsMovingTime(activities);
    this.elevationGain = generateStatsElevation(activities);
  }
}
