import dayjs from 'dayjs';
import { ChartTypes as ChartModel } from '../../../models/chart.model';
import { wattageReducer } from '../../utils/wattageReducer';
import { months } from '../../data/monthlyWattageArray';
import { Bar } from 'react-chartjs-2';
import { chartOptions } from './chartOptions';
import {
	Chart as ChartJS,
	BarController,
	BarElement,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';

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

interface ChartTypes {
	activities: ChartModel[];
}

const MonthlyWattageChart = ({ activities }: ChartTypes) => {
	activities.forEach(item => {
		item.month = dayjs(item.start_date).month();
		if (item.month === 3) months.apr.push(item.average_watts);
		if (item.month === 4) months.may.push(item.average_watts);
		if (item.month === 5) months.jun.push(item.average_watts);
		if (item.month === 6) months.jul.push(item.average_watts);
	});

	const data = {
		labels: ['April', 'May', 'June', 'July'],
		datasets: [
			{
				label: 'Average Watts',
				data: [
					wattageReducer(months.apr),
					wattageReducer(months.may),
					wattageReducer(months.jun),
					wattageReducer(months.jul),
				],
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(153, 102, 255, 0.2)',
					'rgba(255, 159, 64, 0.2)',
				],
				borderColor: [
					'rgba(255, 99, 132, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
					'rgba(255, 159, 64, 1)',
				],
				borderWidth: 5,
			},
		],
	};
	return (
		<div className="relative flex h-96 w-full flex-row justify-center">
			<Bar className="mx-10" data={data} options={chartOptions} />
		</div>
	);
};

export default MonthlyWattageChart;
