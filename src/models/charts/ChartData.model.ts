import { distanceReducer } from "../../helpers/data/distance-reducer";
import { ChartDataItem } from "./ChartDataItem.model";
import { DatasetOptions } from "./DatasetOptions.model";

export class ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
    borderColor: string[];
    borderWidth: number;
  }[];

  constructor(
    type: "weekly" | "monthly" | "yearly",
    chartData: ChartDataItem[],
    labels: string[],
    datasetOptions: DatasetOptions,
  ) {
    this.datasets = [];
    this.labels = labels;

    this.createDataset(type, chartData, datasetOptions);
  }

  public createDataset(
    type: "weekly" | "monthly" | "yearly",
    chartData: ChartDataItem[],
    datasetOptions: DatasetOptions,
  ) {
    this.datasets.push({
      data: this.createData(type, chartData),
      backgroundColor: datasetOptions.backgroundColor,
      borderColor: datasetOptions.borderColor,
      borderWidth: datasetOptions.borderWidth,
      label: datasetOptions.label,
    });
  }

  public createData(
    type: "weekly" | "monthly" | "yearly",
    chartData: ChartDataItem[],
  ): number[] {
    let data: number[] = [];

    switch (type) {
      case "weekly":
        data = this.createWeeklyData(chartData);
        break;
      case "monthly":
        data = this.createMonthlyData(chartData);
        break;
    }

    return data;
  }

  public createWeeklyData(chartData: ChartDataItem[]): number[] {
    const weeks: number[][] = Array.from({ length: 52 }, () => []);

    chartData.forEach((item) => weeks[item.week - 1]?.push(item.distance));

    return weeks.map((weekDistances) => distanceReducer(weekDistances));
  }

  public createMonthlyData(chartData: ChartDataItem[]): number[] {
    const months: number[][] = Array.from({ length: 12 }, () => []);

    chartData.forEach((item) => months[item.month - 1]?.push(item.distance));

    return months.map((monthDistances) => distanceReducer(monthDistances));
  }
}
