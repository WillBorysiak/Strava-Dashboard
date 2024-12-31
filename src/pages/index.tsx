import type { NextPage } from "next";
import { useEffect } from "react";

import useSWR from "swr";

import Hiking from "../components/containers/Hiking";
import Running from "../components/containers/Running";
import Hero from "../components/dashboard/home/Hero";
import Loading from "../components/dashboard/home/Loading";
import StravaSelect, {
  StravaSelectEnum,
} from "../components/dashboard/home/StravaSelect";
import Footer from "../components/layout/Footer";
import Layout from "../components/layout/Layout";
import SEO from "../components/layout/SEO";
import { fetcher } from "../helpers/core/fetcher";
import { IStravaData } from "../interfaces/StravaData.interface";
import { SportEnum, useCoreStore } from "../store/core-store";
import { useHikingStore } from "../store/hiking-store";
import { useRunningStore } from "../store/running-store";
import { useStatStore } from "../store/stat-store";

const Home: NextPage = () => {
  const { data } = useSWR<IStravaData>("/api/strava", fetcher);

  const { selectedSport } = useCoreStore();

  const selectableSports = [SportEnum.running, SportEnum.hiking];

  // stats
  const hasStats = useStatStore((state) => state.hasStats);
  const setStats = useStatStore((state) => state.setStats);
  useEffect(() => {
    if (data && !hasStats) setStats(data.stats);
  }, [data, hasStats, setStats]);

  // running
  const hasRuns = useRunningStore((state) => state.hasRuns);
  const setRuns = useRunningStore((state) => state.setRuns);
  useEffect(() => {
    if (data && !hasRuns) setRuns([data.activities, data.activities2]);
  }, [data, hasRuns, setRuns]);

  // hiking
  const hasHikes = useHikingStore((state) => state.hasHikes);
  const setHikes = useHikingStore((state) => state.setHikes);
  useEffect(() => {
    if (data && !hasHikes) setHikes([data.activities, data.activities2]);
  }, [data, hasHikes, setHikes]);

  const hasData = hasStats && (hasRuns || hasHikes);

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
      <StravaSelect
        data={selectableSports}
        type={StravaSelectEnum.sport}
        text="Select Sport"
      />
      {hasData && selectedSport === SportEnum.running && <Running />}
      {hasData && selectedSport === SportEnum.hiking && <Hiking />}
      <Footer />
    </Layout>
  );
};

export default Home;
