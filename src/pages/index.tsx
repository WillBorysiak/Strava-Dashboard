import { useEffect } from "react";
import type { NextPage } from "next";

import useSWR from "swr";

import { useStatStore } from "../store/statStore/statStore";
import Running from "../components/containers/Running";
import Hero from "../components/dashboard/home/Hero";
import Loading from "../components/dashboard/home/Loading";
import Footer from "../components/layout/Footer";
import Layout from "../components/layout/Layout";
import SEO from "../components/layout/SEO";
import { fetcher } from "../helpers/core/fetcher";
import { IStravaData } from "../interfaces/IStravaData";
import { useRunningStore } from "../store/runningStore/runningStore";

const Home: NextPage = () => {
  const { data } = useSWR<IStravaData>("/api/strava", fetcher);

  // stats store
  const hasStats = useStatStore((state) => state.hasStats);
  const setStats = useStatStore((state) => state.setStats);

  useEffect(() => {
    if (data && !hasStats) setStats(data.stats);
  }, [data, hasStats, setStats]);

  // running store
  const hasRuns = useRunningStore((state) => state.hasRuns);
  const setRuns = useRunningStore((state) => state.setRuns);

  useEffect(() => {
    if (data && !hasRuns) setRuns([data.activities, data.activities2]);
  }, [data, hasRuns, setRuns]);

  const hasData = hasStats && hasRuns;

  if (!data)
    return (
      <Layout>
        <SEO />
        <Hero />
        <Loading />
        <Footer />
      </Layout>
    );

  return (
    <Layout>
      <SEO />
      <Hero />
      {hasData && <Running />}
      <Footer />
    </Layout>
  );
};

export default Home;
