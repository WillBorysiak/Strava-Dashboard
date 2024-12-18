import { ChartDataItem } from "../../models/charts/ChartDataItem";
import { useCoreStore } from "../../store/coreStore";
import { useHikingStore } from "../../store/hikingStore";
import Activities from "../dashboard/activities/Activities";
import Charts from "../dashboard/charts/Charts";
import StravaSelect, { StravaSelectEnum } from "../dashboard/home/StravaSelect";

const Hiking = () => {
  const { selectedYear } = useCoreStore();

  const getHikesByYear = useHikingStore((state) => state.getHikesByYear);

  const hikingData = getHikesByYear(selectedYear);

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
