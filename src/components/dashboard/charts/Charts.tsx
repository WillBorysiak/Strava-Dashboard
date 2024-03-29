import { ChartDataItem } from "../../../models/charts/ChartDataItem";
import { DatasetOptions } from "../../../models/charts/DatasetOptions";
import { ChartData } from "../../../models/charts/ChartData";
import Container from "../../layout/Container";
import Heading from "../../typography/Heading";
import MonthlyDistanceChart from "./MonthlyDistanceChart";
import { chartMonths, chartWeeks } from "./config/chartAxis";
import {
  chartBackgroundColors,
  chartBorderColors,
  chartBorderWidth,
} from "./config/chartStyling";
import WeeklyDistanceChart from "./WeeklyDistanceChart";

interface ChartsProps {
  chartData: ChartDataItem[];
}

const Charts = (props: ChartsProps) => {
  const { chartData } = props;

  const datasetLabel = "Distance in Km";
  const datasetOptions = new DatasetOptions(
    datasetLabel,
    chartBackgroundColors,
    chartBorderColors,
    chartBorderWidth,
  );

  // weekly
  const weeklyChartData = new ChartData(
    "weekly",
    chartData,
    chartWeeks,
    datasetOptions,
  );

  // monthly
  const monthlyChartData = new ChartData(
    "monthly",
    chartData,
    chartMonths,
    datasetOptions,
  );

  return (
    <Container>
      <div id="charts" className="mb-5 mt-5 flex flex-col">
        <Heading text="Weekly Distances" />
        <div className="mb-5 mt-5 flex-col justify-center">
          <WeeklyDistanceChart chartData={weeklyChartData} />
        </div>
        <Heading text="Monthly Distances" />
        <div className="mb-5 mt-5 flex flex-col justify-center">
          <MonthlyDistanceChart chartData={monthlyChartData} />
        </div>
      </div>
    </Container>
  );
};

export default Charts;
