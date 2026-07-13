import { createClient } from "redis";
import type { RedisClientType } from "redis";

interface RedisServiceConfig {
  url?: string;
  client?: RedisClientType;
}

export class RedisService {
  private static sharedClient: RedisClientType | null = null;

  private readonly url?: string;
  private readonly client?: RedisClientType;

  constructor(config: RedisServiceConfig) {
    this.url = config.url;
    this.client = config.client;
  }

  getClient = async (): Promise<RedisClientType> => {
    if (this.client) {
      return this.client;
    }

    if (!RedisService.sharedClient) {
      RedisService.sharedClient = createClient({
        url: this.url,
      });

      await RedisService.sharedClient.connect();
    }

    return RedisService.sharedClient;
  };
}
