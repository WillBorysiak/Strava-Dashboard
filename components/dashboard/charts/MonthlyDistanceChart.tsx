import { Bar } from 'react-chartjs-2';
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

const data = {
	labels: ['April', 'May', 'June', 'July'],
	datasets: [
		{
			label: '# of Votes',
			data: [12, 19, 10, 18, 17, 10],
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
			borderWidth: 1,
		},
	],
};

const options = {
	responsive: true,
	maintainAspectRatio: false,
	plugins: {
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
			},
			ticks: {
				font: {
					family: 'Oswald', // Your font family
					size: 20,
				},
			},
		},
	},
};

const MonthlyDistanceChart = () => {
	return (
		<div className="relative h-96 w-full">
			<Bar className="mx-10" data={data} options={options} />
		</div>
	);
};

export default MonthlyDistanceChart;
