import { StravaSelectEnum } from "../../enums/strava-select.enum";
import { ChartDataItem } from "../../models/charts/ChartDataItem.model";
import { useCoreStore } from "../../store/core-store";
import { useHikingStore } from "../../store/hiking-store";
import Activities from "../dashboard/activities/Activities";
import Charts from "../dashboard/charts/Charts";
import StravaSelect from "../dashboard/home/StravaSelect";

const Hiking = () => {
  const { selectedYear } = useCoreStore();

  const getHikesByYear = useHikingStore((state) => state.getHikesByYear);

  const chartData: ChartDataItem[] = [];
  const hikingData = getHikesByYear(selectedYear);

  if (hikingData) {
    hikingData.forEach((hike) => chartData.push(new ChartDataItem(hike)));
  }

  const stravaSelectYears: number[] = [2023, 2024, 2025];

  return (
    <section id="hiking">
      <StravaSelect
        selectOptions={stravaSelectYears}
        type={StravaSelectEnum.year}
      />

      {chartData && <Charts chartData={chartData} />}
      {hikingData && <Activities activities={hikingData} />}
    </section>
  );
};

export default Hiking;
