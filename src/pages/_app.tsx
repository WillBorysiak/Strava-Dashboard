import type { AppProps } from "next/app";
import { Oswald } from "next/font/google";

import "@fortawesome/fontawesome-svg-core/styles.css";

import "../styles/globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={`${oswald.className}`}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
