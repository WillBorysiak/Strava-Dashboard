import { SportEnum } from "../../enums/sport.enum";
import { StravaSelectEnum } from "../../enums/strava-select.enum";
import { ChartDataItem } from "../../models/charts/ChartDataItem.model";
import { useCoreStore } from "../../store/core-store";
import { useRunningStore } from "../../store/running-store";
import Activities from "../dashboard/activities/Activities";
import Charts from "../dashboard/charts/Charts";
import StravaSelect from "../dashboard/home/StravaSelect";
import YearlyStats from "../dashboard/stats/YearlyStats";

const Running = () => {
  const { selectedYear } = useCoreStore();

  const getStatsByYear = useRunningStore((state) => state.getStatsByYear);
  const getRunsByYear = useRunningStore((state) => state.getRunsByYear);

  const yearlyRunningStats = getStatsByYear(selectedYear);
  const chartData: ChartDataItem[] = [];
  const runningData = getRunsByYear(selectedYear);

  if (runningData) {
    runningData.forEach((run) => chartData.push(new ChartDataItem(run)));
  }

  const stravaSelectYears: number[] = [2021, 2022, 2023, 2024, 2025];

  return (
    <section id="running">
      <YearlyStats stats={yearlyRunningStats} sport={SportEnum.running} />
      <StravaSelect
        selectOptions={stravaSelectYears}
        type={StravaSelectEnum.year}
      />
      <Charts chartData={chartData} />
      <Activities activities={runningData} />
    </section>
  );
};

export default Running;
