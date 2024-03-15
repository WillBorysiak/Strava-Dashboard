import { ChartDataItem } from "../../models/charts/ChartDataItem";
import { useCoreStore } from "../../store/coreStore/coreStore";
import { useRunningStore } from "../../store/runningStore/runningStore";
import { useStatStore } from "../../store/statStore/statStore";
import Activities from "../dashboard/activities/Activities";
import Charts from "../dashboard/charts/Charts";
import SelectYear from "../dashboard/home/SelectYear";
import Stats from "../dashboard/stats/Stats";

const Running = () => {
  const { selectedYear } = useCoreStore();

  const statsData = useStatStore((state) => state.stats);
  const runningData = useRunningStore((state) =>
    state.getRunsByYear(selectedYear),
  );

  let chartData: ChartDataItem[] = [];
  if (runningData) chartData = runningData.map((run) => new ChartDataItem(run));

  return (
    <section id="running">
      {statsData && <Stats data={statsData} />}
      <SelectYear />
      {chartData && <Charts chartData={chartData} />}
      {runningData && <Activities activities={runningData} />}
    </section>
  );
};

export default Running;
