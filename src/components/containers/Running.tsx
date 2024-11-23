import { ChartDataItem } from "../../models/charts/ChartDataItem";
import { useActivityStore } from "../../store/activityStore/activityStore";
import { useCoreStore } from "../../store/coreStore/coreStore";
import { useStatStore } from "../../store/statStore/statStore";
import Activities from "../dashboard/activities/Activities";
import Charts from "../dashboard/charts/Charts";
import StravaSelect, { StravaSelectEnum } from "../dashboard/home/StravaSelect";
import Stats from "../dashboard/stats/Stats";

const Running = () => {
  const { selectedYear } = useCoreStore();

  const statsData = useStatStore((state) => state.stats);
  const runningData = useActivityStore((state) =>
    state.getRunsByYear(selectedYear),
  );

  let chartData: ChartDataItem[] = [];

  if (runningData) chartData = runningData.map((run) => new ChartDataItem(run));

  const stravaSelectYears = [2021, 2022, 2023, 2024];

  return (
    <section id="running">
      {statsData && <Stats data={statsData} />}
      <StravaSelect
        data={stravaSelectYears}
        type={StravaSelectEnum.year}
        text={"Select Year"}
      />
      {chartData && <Charts chartData={chartData} />}
      {runningData && <Activities activities={runningData} />}
    </section>
  );
};

export default Running;
