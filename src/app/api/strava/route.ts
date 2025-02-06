import { NextResponse } from "next/server";

import { RedisService } from "../../../services/redis-service";
import { StravaService } from "../../../services/strava-service";

const STRAVA_DATA_KEY = "stravaData";
const CACHE_EXPIRY = 600; // 10 minutes

export async function GET() {
  try {
    const redisClient = await RedisService.getClient();

    const cachedData = await redisClient.get(STRAVA_DATA_KEY);

    if (!cachedData) {
      const stravaData = await StravaService.fetchFromStrava();

      await redisClient.set(STRAVA_DATA_KEY, JSON.stringify(stravaData), {
        EX: CACHE_EXPIRY,
      });

      return NextResponse.json(stravaData);
    }

    const parsedData = JSON.parse(cachedData);

    return NextResponse.json(parsedData);
  } catch (error) {
    console.error("Error fetching or caching Strava data:", error);

    return NextResponse.json(
      { message: "Failed to fetch or cache Strava data" },
      { status: 500 },
    );
  }
}
