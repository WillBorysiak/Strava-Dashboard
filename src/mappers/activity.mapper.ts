import { IActivity } from "../interfaces/Activity.interface";

export const mapActivities = (activitiesByYear: IActivity[][]): IActivity[] => {
  return activitiesByYear.flat().map((activity: IActivity) => ({
    name: activity.name,
    id: activity.id,
    sport_type: activity.sport_type,
    start_date: activity.start_date,
    distance: activity.distance,
    moving_time: activity.moving_time,
    total_elevation_gain: activity.total_elevation_gain,
    average_speed: activity.average_speed,
    average_heartrate: activity.average_heartrate,
  }));
};
