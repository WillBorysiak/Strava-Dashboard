import { IActivity } from "../interfaces/Activity.interface";

export class StravaService {
  static generateAccessToken = async () => {
    const headers = {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    };

    const body = JSON.stringify({
      client_id: process.env.STRAVA_CLIENT_ID,
      client_secret: process.env.STRAVA_SECRET,
      refresh_token: process.env.STRAVA_REFRESH_TOKEN,
      grant_type: "refresh_token",
    });

    const refreshAccess = await fetch("https://www.strava.com/oauth/token", {
      method: "post",
      headers: headers,
      body: body,
    });
    const accessJson = await refreshAccess.json();
    const accessToken = accessJson.access_token;

    return accessToken;
  };

  static fetchFromStrava = async () => {
    const accessToken = await StravaService.generateAccessToken();

    const activityUrl = "https://www.strava.com/api/v3/athlete/activities";

    // (2021)
    const params2021 = new URLSearchParams({
      after: "1609459200", // 2021-01-01 00:00:00 UTC
      before: "1640995199", // 2021-12-31 23:59:59 UTC
      per_page: "200",
      access_token: accessToken,
    });
    const response2021 = await fetch(`${activityUrl}?${params2021}`);
    const activities2021 = await response2021.json();

    // (2022)
    const params2022 = new URLSearchParams({
      after: "1640995200", // 2022-01-01 00:00:00 UTC
      before: "1672531199", // 2022-12-31 23:59:59 UTC
      per_page: "200",
      access_token: accessToken,
    });
    const response2022 = await fetch(`${activityUrl}?${params2022}`);
    const activities2022 = await response2022.json();

    // (2023)
    const params2023 = new URLSearchParams({
      after: "1672531200", // 2023-01-01 00:00:00 UTC
      before: "1704067199", // 2023-12-31 23:59:59 UTC
      per_page: "200",
      access_token: accessToken,
    });
    const response2023 = await fetch(`${activityUrl}?${params2023}`);
    const activities2023 = await response2023.json();

    // (2024)
    const params2024 = new URLSearchParams({
      after: "1704067200", // 2024-01-01 00:00:00 UTC
      before: "1735689599", // 2024-12-31 23:59:59 UTC
      per_page: "200",
      access_token: accessToken,
    });
    const response2024 = await fetch(`${activityUrl}?${params2024}`);
    const activities2024 = await response2024.json();

    // (2025)
    const params2025 = new URLSearchParams({
      after: "1735689600", // 2025-01-01 00:00:00 UTC
      before: "1767225599", // 2025-12-31 23:59:59 UTC
      per_page: "200",
      access_token: accessToken,
    });
    const response2025 = await fetch(`${activityUrl}?${params2025}`);
    const activities2025 = await response2025.json();

    const activitiesArray: IActivity[] = [
      ...activities2021,
      ...activities2022,
      ...activities2023,
      ...activities2024,
      ...activities2025,
    ];

    const activities = StravaService.createActivities(activitiesArray);

    return activities;
  };

  static createActivities = (activitiesArray: IActivity[]): IActivity[] => {
    const activities: IActivity[] = activitiesArray.map((activity) => ({
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

    return activities;
  };
}
