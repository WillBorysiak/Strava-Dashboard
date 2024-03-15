import {
  BarController,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { motion } from "framer-motion";
import { Bar } from "react-chartjs-2";

import { scrollVariants } from "../../../helpers/core/animationVariants";
import { ChartData } from "../../../models/charts/ChartData";
import { chartOptions } from "./config/chartOptions";

ChartJS.register(
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

interface MonthlyDistanceChartProps {
  chartData: ChartData;
}

const MonthlyDistanceChart = (props: MonthlyDistanceChartProps) => {
  const { chartData } = props;

  return (
    <motion.div
      id="monthly-chart"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={scrollVariants}
      className="relative flex h-96 w-full flex-row justify-center"
    >
      <Bar className="mx-5" data={chartData} options={chartOptions} />
    </motion.div>
  );
};

export default MonthlyDistanceChart;
