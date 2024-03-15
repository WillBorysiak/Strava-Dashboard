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
import { IStravaData } from "../interfaces/IStravaData";
import { useActivityStore } from "../store/activityStore/activityStore";
import { SportEnum, useCoreStore } from "../store/coreStore/coreStore";
import { useStatStore } from "../store/statStore/statStore";

const Home: NextPage = () => {
  const { data } = useSWR<IStravaData>("/api/strava", fetcher);

  const { selectedSport } = useCoreStore();

  // stats
  const hasStats = useStatStore((state) => state.hasStats);
  const setStats = useStatStore((state) => state.setStats);
  useEffect(() => {
    if (data && !hasStats) setStats(data.stats);
  }, [data, hasStats, setStats]);

  // running
  const hasRuns = useActivityStore((state) => state.hasRuns);
  const setRuns = useActivityStore((state) => state.setRuns);
  useEffect(() => {
    if (data && !hasRuns) setRuns([data.activities, data.activities2]);
  }, [data, hasRuns, setRuns]);

  // hiking
  const hasHikes = useActivityStore((state) => state.hasHikes);
  const setHikes = useActivityStore((state) => state.setHikes);
  useEffect(() => {
    if (data && !hasHikes) setHikes([data.activities, data.activities2]);
  }, [data, hasHikes, setHikes]);

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
      <StravaSelect
        data={[SportEnum.running, SportEnum.hiking]}
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
