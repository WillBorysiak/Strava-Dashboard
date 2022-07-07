import dayjs from 'dayjs';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import { distanceReducer } from '../../utils/distanceReducer';
import { ChartTypes as ChartModel } from '../../../models/chart.model';
import { Line } from 'react-chartjs-2';
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

const options = {
	responsive: true,
	maintainAspectRatio: false,
	plugins: {
		tooltip: {
			displayColors: false,
			bodyColor: '#e4e4e7',
		},
		legend: {
			labels: {
				font: {
					size: 20,
				},
			},
		},
	},
	scales: {
		x: {
			grid: {
				display: false,
				color: '#e4e4e7',
			},
			ticks: {
				color: '#e4e4e7',
				font: {
					family: 'Oswald',
					size: 20,
				},
			},
		},
		y: {
			ticks: {
				color: '#e4e4e7',
				font: {
					family: 'Oswald',
					size: 20,
				},
			},
		},
	},
};

interface ChartTypes {
	activities: ChartModel[];
}

const WeeklyDistanceChart = ({ activities }: ChartTypes) => {
	dayjs.extend(weekOfYear);
	dayjs.Ls.en.weekStart = 1;

	const weeklyArrays: number[][] = [];

	activities.forEach(item => (item.week = dayjs(item.start_date).week()));

	for (let i = 17; i < activities.length + 1; i++) {
		let weeklyTotal: number[] = [];
		activities.forEach(item => {
			if (item.week === i) {
				weeklyTotal.push(item.distance);
			}
		});
		weeklyArrays.push(weeklyTotal);
	}

	const weekNumbers: string[] = [];
	const weeklyData: number[] = [];

	weeklyArrays.forEach((item, index) => {
		const total = distanceReducer(item);
		const week = `Week ${index + 1}`;
		weekNumbers.push(week);
		weeklyData.push(total);
	});

	const data = {
		labels: weekNumbers,
		datasets: [
			{
				label: 'Distance in Km',
				data: weeklyData,
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
		<div className="relative h-96 w-full">
			<Line className="mx-10" data={data} options={options} />
		</div>
	);
};

export default WeeklyDistanceChart;
