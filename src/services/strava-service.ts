import { IActivity } from "../interfaces/Activity.interface";
import { mapActivities } from "../mappers/activity.mapper";

interface StravaServiceConfig {
  clientId?: string;
  clientSecret?: string;
  refreshToken?: string;
  fetchImpl?: typeof fetch;
}

export class StravaService {
  private static readonly BASE_URL = "https://www.strava.com";
  private static readonly API_BASE_URL = `${StravaService.BASE_URL}/api/v3`;

  private readonly clientId?: string;
  private readonly clientSecret?: string;
  private readonly refreshToken?: string;
  private readonly fetchImpl: typeof fetch;

  private readonly authUrl = `${StravaService.BASE_URL}/oauth/token`;
  private readonly activityUrl = `${StravaService.API_BASE_URL}/athlete/activities`;

  constructor(config: StravaServiceConfig) {
    this.clientId = config.clientId;
    this.clientSecret = config.clientSecret;
    this.refreshToken = config.refreshToken;
    this.fetchImpl = config.fetchImpl ?? fetch;
  }

  fetchJson = async <T>(
    url: string,
    options?: Parameters<typeof fetch>[1],
  ): Promise<T> => {
    const response = await this.fetchImpl(url, options);
    const responseJson = await response.json();

    if (!response.ok) {
      throw new Error(
        `Strava request failed (${response.status}): ${JSON.stringify(responseJson)}`,
      );
    }

    return responseJson as T;
  };

  generateAccessToken = async () => {
    const accessJson = await this.fetchJson<{
      access_token?: string;
      scope?: string;
    }>(this.authUrl, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        client_id: this.clientId,
        client_secret: this.clientSecret,
        refresh_token: this.refreshToken,
        grant_type: "refresh_token",
      }),
    });

    if (!accessJson.access_token) {
      throw new Error(
        `Strava token response did not include an access token. Scope: ${accessJson.scope ?? "unknown"}`,
      );
    }

    return accessJson.access_token;
  };

  fetchFromStrava = async () => {
    const accessToken = await this.generateAccessToken();

    const activityDateRanges = [
      { after: "1609459200", before: "1640995199" }, // 2021
      { after: "1640995200", before: "1672531199" }, // 2022
      { after: "1672531200", before: "1704067199" }, // 2023
      { after: "1704067200", before: "1735689599" }, // 2024
      { after: "1735689600", before: "1767225599" }, // 2025
      { after: "1767225600", before: "1798761599" }, // 2026
    ];

    const activitiesByYear: IActivity[][] = await Promise.all(
      activityDateRanges.map(({ after, before }) => {
        const params = new URLSearchParams({
          after,
          before,
          per_page: "200",
        });

        return this.fetchJson<IActivity[]>(`${this.activityUrl}?${params}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
      }),
    );

    const activities = mapActivities(activitiesByYear);

    return activities;
  };
}
