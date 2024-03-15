import {
  generateMonth,
  generateWeek,
  generateYear,
} from "../../helpers/dates/generateDateValues";
import { IActivity } from "../../interfaces/IActivity";

export class Activity {
  name: string;
  id: number;
  startDate: string;
  distance: number;
  movingTime: number;
  elevationHigh: number;
  averageSpeed: number;
  averageHeartRate: number;
  week: number;
  month: number;
  year: number;

  constructor(activity: IActivity) {
    this.name = activity.name;
    this.id = activity.id;
    this.startDate = activity.start_date;
    this.distance = activity.distance;
    this.movingTime = activity.moving_time;
    this.elevationHigh = activity.elev_high;
    this.averageSpeed = activity.average_speed;
    this.averageHeartRate = activity.average_heartrate;
    this.week = generateWeek(activity.start_date);
    this.month = generateMonth(activity.start_date);
    this.year = generateYear(activity.start_date);
  }
}
