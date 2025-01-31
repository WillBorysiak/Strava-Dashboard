import { useEffect } from "react";

import type { NextPage } from "next";

import useSWR from "swr";

import Hiking from "../components/containers/Hiking";
import Running from "../components/containers/Running";
import Hero from "../components/dashboard/home/Hero";
import Loading from "../components/dashboard/home/Loading";
import StravaSelect from "../components/dashboard/home/StravaSelect";
import WeeklyStats from "../components/dashboard/stats/WeeklyStats";
import Footer from "../components/layout/Footer";
import Layout from "../components/layout/Layout";
import SEO from "../components/layout/SEO";
import { SportEnum } from "../enums/sport.enum";
import { StravaSelectEnum } from "../enums/strava-select.enum";
import { fetcher } from "../helpers/core/fetcher";
import { IActivity } from "../interfaces/Activity.interface";
import { useCoreStore } from "../store/core-store";
import { useHikingStore } from "../store/hiking-store";
import { useRunningStore } from "../store/running-store";

const Home: NextPage = () => {
  const { data } = useSWR<IActivity[]>("/api/strava", fetcher);

  const { selectedSport } = useCoreStore();

  const selectableSports = [SportEnum.running, SportEnum.hiking];

  // running
  const hasRuns = useRunningStore((state) => state.hasRuns);
  const setRuns = useRunningStore((state) => state.setRuns);
  useEffect(() => {
    if (data && !hasRuns) setRuns(data);
  }, [data, hasRuns, setRuns]);

  // hiking
  const hasHikes = useHikingStore((state) => state.hasHikes);
  const setHikes = useHikingStore((state) => state.setHikes);
  useEffect(() => {
    if (data && !hasHikes) setHikes(data);
  }, [data, hasHikes, setHikes]);

  const hasData = hasRuns || hasHikes;

  return (
    <Layout>
      <SEO />
      <Hero />
      {!hasData && <Loading />}
      {hasData && (
        <>
          <WeeklyStats />
          <StravaSelect
            selectOptions={selectableSports}
            type={StravaSelectEnum.sport}
          />
          {selectedSport === SportEnum.running && <Running />}
          {selectedSport === SportEnum.hiking && <Hiking />}
        </>
      )}
      <Footer />
    </Layout>
  );
};

export default Home;
