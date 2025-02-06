import { useEffect } from "react";

import { SportEnum } from "../../enums/sport.enum";
import { StravaSelectEnum } from "../../enums/strava-select.enum";
import { IActivity } from "../../interfaces/Activity.interface";
import { useCoreStore } from "../../store/core-store";
import { useHikingStore } from "../../store/hiking-store";
import { useRunningStore } from "../../store/running-store";
import Loading from "../dashboard/home/Loading";
import StravaSelect from "../dashboard/home/StravaSelect";
import WeeklyStats from "../dashboard/stats/WeeklyStats";
import Running from "./Running";
import Hiking from "./Hiking";

interface DashboardProps {
  data: IActivity[] | undefined;
}

const Dashboard = (props: DashboardProps) => {
  const { data } = props;

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
    <section id="dashboard">
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
    </section>
  );
};

export default Dashboard;
