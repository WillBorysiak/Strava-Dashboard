import { SportEnum } from "../../enums/sport.enum";
import { Activity } from "../../models/activities/Activity.model";
import {
  distanceConverter,
  elevationConverter,
  hoursMinsConverter,
} from "./converters";

// count

export const generateStatsCount = (activities: Activity[]): number => {
  const count: number = activities.length;

  return count;
};

// distance

export const generateStatsDistance = (activities: Activity[]): string => {
  const totalDistance: number = activities.reduce((acc, activity) => {
    return acc + activity.distance;
  }, 0);

  const distanceInKm: string = distanceConverter(totalDistance, 2, "km");

  return distanceInKm;
};

// moving time

export const generateStatsMovingTime = (activities: Activity[]): string => {
  const totalMovingTime: number = activities.reduce((acc, activity) => {
    return acc + activity.movingTime;
  }, 0);

  const timeInHr: string = hoursMinsConverter(totalMovingTime, "h");

  return timeInHr;
};

// elevation

export const generateStatsElevation = (activities: Activity[]): string => {
  const totalElevation: number = activities.reduce((acc, activity) => {
    return acc + activity.elevationGain;
  }, 0);

  const elevationInM: string = elevationConverter(totalElevation, "m");

  return elevationInM;
};

// title

export const generateStatsTitle = (sport: SportEnum): string => {
  let title: string = "";

  if (sport === SportEnum.running) {
    title = "Total Runs";
  } else if (sport === SportEnum.hiking) {
    title = "Total Hikes";
  }

  return title;
};
