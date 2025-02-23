/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  env: {
    STRAVA_SECRET: process.env.STRAVA_SECRET,
    STRAVA_REFRESH_TOKEN: process.env.STRAVA_REFRESH_TOKEN,
    STRAVA_CLIENT_ID: process.env.STRAVA_CLIENT_ID,
    REDIS_URL: process.env.REDIS_URL,
  },
};

module.exports = nextConfig;
