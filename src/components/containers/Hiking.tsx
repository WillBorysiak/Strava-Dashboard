import { ChartDataItem } from "../../models/charts/ChartDataItem";
import { useActivityStore } from "../../store/activityStore/activityStore";
import { useCoreStore } from "../../store/coreStore/coreStore";
import Activities from "../dashboard/activities/Activities";
import Charts from "../dashboard/charts/Charts";
import StravaSelect, { StravaSelectEnum } from "../dashboard/home/StravaSelect";

const Hiking = () => {
  const { selectedYear } = useCoreStore();

  const hikingData = useActivityStore((state) =>
    state.getHikesByYear(selectedYear),
  );

  let chartData: ChartDataItem[] = [];

  if (hikingData) chartData = hikingData.map((hike) => new ChartDataItem(hike));

  const stravaSelectYears = [2023, 2024];

  return (
    <section id="hiking">
      <StravaSelect
        data={stravaSelectYears}
        type={StravaSelectEnum.year}
        text={"Select Year"}
      />

      {chartData && <Charts chartData={chartData} />}
      {hikingData && <Activities activities={hikingData} />}
    </section>
  );
};

export default Hiking;
