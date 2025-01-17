import { NextApiRequest, NextApiResponse } from "next";

import { RedisService } from "../../services/redis-service";
import { StravaService } from "../../services/strava-service";

const STRAVA_DATA_KEY = "stravaData";
const CACHE_EXPIRY = 600; // 1 hour

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const redisClient = await RedisService.getClient();

    const cachedData = await redisClient.get(STRAVA_DATA_KEY);

    if (!cachedData) {
      const stravaData = await StravaService.fetchFromStrava();

      await redisClient.set(STRAVA_DATA_KEY, JSON.stringify(stravaData), {
        EX: CACHE_EXPIRY,
      });

      return res.status(200).json(stravaData);
    }

    return res.status(200).json(JSON.parse(cachedData));
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Failed to fetch or cache Strava data" });
  }
};

export default handler;
