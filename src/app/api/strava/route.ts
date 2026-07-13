import { NextResponse } from "next/server";

import { RedisService } from "../../../services/redis-service";
import { StravaService } from "../../../services/strava-service";

const STRAVA_DATA_KEY = "stravaData";
const CACHE_EXPIRY = 3600; // 1 hour

export async function GET() {
  try {
    const redisService = new RedisService({
      url: process.env.REDIS_URL,
    });
    const redisClient = await redisService.getClient();

    const stravaService = new StravaService({
      clientId: process.env.STRAVA_CLIENT_ID,
      clientSecret: process.env.STRAVA_SECRET,
      refreshToken: process.env.STRAVA_REFRESH_TOKEN,
    });

    const cachedData = await redisClient.get(STRAVA_DATA_KEY);

    if (!cachedData) {
      console.log("Requesting data from Strava...");

      const stravaData = await stravaService.fetchFromStrava();

      await redisClient.set(STRAVA_DATA_KEY, JSON.stringify(stravaData), {
        expiration: {
          type: "EX",
          value: CACHE_EXPIRY,
        },
      });

      return NextResponse.json(stravaData);
    } else {
      console.log("Using cached data from Redis...");

      const parsedData = JSON.parse(cachedData);

      return NextResponse.json(parsedData);
    }
  } catch (error) {
    console.error("Error fetching or caching Strava data:", error);

    return NextResponse.json(
      { message: "Failed to fetch or cache Strava data" },
      { status: 500 },
    );
  }
}
