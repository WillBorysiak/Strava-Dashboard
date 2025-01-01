import {
  dateConverter,
  distanceConverter,
  elevationConverter,
  heartRateConverter,
  hoursMinsConverter,
  speedConverter,
} from "../helpers/data/converters";
import { Activity } from "../models/activities/Activity.model";

export class ActivityViewModel {
  name: string;
  id: number;
  distance: string;
  date: string;
  duration: string;
  elevation: string;
  speed: string;
  heartRate: string;

  constructor(activity: Activity) {
    this.name = activity.name;
    this.id = activity.id;
    this.distance = distanceConverter(activity.distance, 2, "km");
    this.date = dateConverter(activity.startDate);
    this.duration = hoursMinsConverter(activity.movingTime, "h");
    this.elevation = elevationConverter(activity.elevationGain, "m");
    this.speed = speedConverter(activity.averageSpeed, "km/h");
    this.heartRate = heartRateConverter(activity.averageHeartRate, "bpm");
  }
}
