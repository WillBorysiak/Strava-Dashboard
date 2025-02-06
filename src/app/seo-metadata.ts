import { Metadata } from "next";

export const SEOMetadata: Metadata = {
  title: "Strava Dashboard",
  description: "A dashboard to display my exercise data to track progress.",
  icons: {
    icon: [
      { url: "/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      {
        url: "/favicons/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/favicons/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        url: "/favicons/apple-touch-icon.png",
        sizes: "180x180",
        rel: "apple-touch-icon",
      },
      {
        url: "/favicons/favicon.ico",
        rel: "shortcut icon",
        type: "image/x-icon",
      },
    ],
    shortcut: "/favicons/favicon.ico",
  },
  openGraph: {
    description: "A dashboard to display my exercise data to track progress.",
  },
};
