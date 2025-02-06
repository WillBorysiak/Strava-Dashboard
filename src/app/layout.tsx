import { ReactNode } from "react";

import { Oswald } from "next/font/google";

import "@fortawesome/fontawesome-svg-core/styles.css";

import "../styles/globals.css";
import { SEOMetadata } from "./seo-metadata";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata = SEOMetadata;

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body className={`${oswald.className}`}>{children}</body>
    </html>
  );
};
export default RootLayout;
