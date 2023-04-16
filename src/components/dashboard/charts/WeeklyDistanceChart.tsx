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
} from 'chart.js';
import { motion } from 'framer-motion';
import { Line } from 'react-chartjs-2';

import { ChartModel } from '../../../models/chart.model';
import { distanceReducer } from '../../utils/distanceReducer';
import { scrollAnimationVariants } from '../../utils/scrollAnimationVariants';
import { chartOptions } from './chartOptions';

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

const WeeklyDistanceChart = (props: { activities: ChartModel[] | undefined }) => {
	const activities = props.activities;

	const weeklyDistanceArrays: number[][] = [];

	for (let i = 2; i < 52; i++) {
		let weeklyTotal: number[] = [];
		if (activities)
			activities.forEach(item => {
				if (item.week === i) {
					weeklyTotal.push(item.distance);
				}
			});
		weeklyDistanceArrays.push(weeklyTotal);
	}

	const weeklyNumber: string[] = [];
	const weeklyDistance: number[] = [];

	weeklyDistanceArrays.forEach((item, index) => {
		const week = `Week ${index + 1}`;
		const total = distanceReducer(item);
		weeklyNumber.push(week);
		if (item.length === 0) {
			weeklyDistance.push(0);
			return;
		}
		weeklyDistance.push(total);
	});

	const data = {
		labels: weeklyNumber,
		datasets: [
			{
				label: 'Distance in Km',
				data: weeklyDistance,
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
		<motion.div
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			variants={scrollAnimationVariants}
			className="relative flex h-96 w-full flex-col justify-center"
		>
			<Line className="" data={data} options={chartOptions} />
		</motion.div>
	);
};

export default WeeklyDistanceChart;
