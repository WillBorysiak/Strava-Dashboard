import { SportEnum } from "../../enums/sport.enum";
import { StravaSelectEnum } from "../../enums/strava-select.enum";
import { ChartDataItem } from "../../models/charts/ChartDataItem.model";
import { useCoreStore } from "../../store/core-store";
import { useHikingStore } from "../../store/hiking-store";
import Activities from "../dashboard/activities/Activities";
import Charts from "../dashboard/charts/Charts";
import StravaSelect from "../dashboard/home/StravaSelect";
import YearlyStats from "../dashboard/stats/YearlyStats";

const Hiking = () => {
  const { selectedYear } = useCoreStore();

  const getStatsByYear = useHikingStore((state) => state.getStatsByYear);
  const getHikesByYear = useHikingStore((state) => state.getHikesByYear);

  const yearlyHikingStats = getStatsByYear(selectedYear);
  const chartData: ChartDataItem[] = [];
  const hikingData = getHikesByYear(selectedYear);

  if (hikingData) {
    hikingData.forEach((hike) => chartData.push(new ChartDataItem(hike)));
  }

  const stravaSelectYears: number[] = [2023, 2024, 2025];

  return (
    <section id="hiking">
      <YearlyStats stats={yearlyHikingStats} sport={SportEnum.hiking} />
      <StravaSelect
        selectOptions={stravaSelectYears}
        type={StravaSelectEnum.year}
      />

      <Charts chartData={chartData} />
      <Activities activities={hikingData} />
    </section>
  );
};

export default Hiking;
