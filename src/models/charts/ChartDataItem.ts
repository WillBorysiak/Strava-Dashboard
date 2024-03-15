import { Activity } from "../activities/Activity";

export class ChartDataItem {
  distance: number;
  week: number;
  month: number;
  year: number;

  constructor(activity: Activity) {
    this.distance = activity.distance;
    this.week = activity.week;
    this.month = activity.month;
    this.year = activity.year;
  }
}
