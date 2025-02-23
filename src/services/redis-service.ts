import { createClient } from "redis";
import type { RedisClientType } from "redis";

export class RedisService {
  private static client: RedisClientType | null = null;

  static async getClient(): Promise<RedisClientType> {
    if (!RedisService.client) {
      RedisService.client = createClient({
        url: process.env.REDIS_URL,
      });

      await RedisService.client.connect();
    }

    return RedisService.client;
  }
}
