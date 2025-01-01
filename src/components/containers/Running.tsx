import { StravaSelectEnum } from "../../enums/strava-select.enum";
import { ChartDataItem } from "../../models/charts/ChartDataItem.model";
import { useCoreStore } from "../../store/core-store";
import { useRunningStore } from "../../store/running-store";
import { useStatStore } from "../../store/stat-store";
import Activities from "../dashboard/activities/Activities";
import Charts from "../dashboard/charts/Charts";
import StravaSelect from "../dashboard/home/StravaSelect";
import Stats from "../dashboard/stats/Stats";

const Running = () => {
  const { selectedYear } = useCoreStore();

  const getRunsByYear = useRunningStore((state) => state.getRunsByYear);

  const statsData = useStatStore((state) => state.stats);
  const chartData: ChartDataItem[] = [];
  const runningData = getRunsByYear(selectedYear);

  if (runningData) {
    runningData.forEach((run) => chartData.push(new ChartDataItem(run)));
  }

  const stravaSelectYears: number[] = [2021, 2022, 2023, 2024, 2025];

  return (
    <section id="running">
      {statsData && <Stats stats={statsData} />}
      <StravaSelect
        selectOptions={stravaSelectYears}
        type={StravaSelectEnum.year}
      />
      {chartData && <Charts chartData={chartData} />}
      {runningData && <Activities activities={runningData} />}
    </section>
  );
};

export default Running;
