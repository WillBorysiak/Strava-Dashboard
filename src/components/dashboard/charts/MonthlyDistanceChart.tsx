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
import dayjs from 'dayjs';
import { motion } from 'framer-motion';
import { Bar } from 'react-chartjs-2';

import { ChartModel } from '../../../models/chart.model';
import { MonthsModel } from '../../../models/months.model';
import { distanceReducer } from '../../utils/distanceReducer';
import { scrollAnimationVariants } from '../../utils/scrollAnimationVariants';
import { chartOptions, monthNames } from './chartOptions';

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

interface Monthy {
	activities: ChartModel[];
}

const MonthlyDistanceChart = (props: { activities: ChartModel[] | undefined }) => {
	const activities = props.activities;

	const months: MonthsModel = {
		jan: [],
		feb: [],
		mar: [],
		apr: [],
		may: [],
		jun: [],
		jul: [],
		aug: [],
		sept: [],
		oct: [],
		nov: [],
		dec: [],
	};

	if (activities)
		activities.forEach(item => {
			if (item.month === 1) months.jan.push(item.distance);
			if (item.month === 2) months.feb.push(item.distance);
			if (item.month === 3) months.mar.push(item.distance);
			if (item.month === 4) months.apr.push(item.distance);
			if (item.month === 5) months.may.push(item.distance);
			if (item.month === 6) months.jun.push(item.distance);
			if (item.month === 7) months.jul.push(item.distance);
			if (item.month === 8) months.aug.push(item.distance);
			if (item.month === 9) months.sept.push(item.distance);
			if (item.month === 10) months.oct.push(item.distance);
			if (item.month === 11) months.nov.push(item.distance);
			if (item.month === 12) months.dec.push(item.distance);
		});

	const data = {
		labels: monthNames,
		datasets: [
			{
				label: 'Distance in Km',
				data: [
					distanceReducer(months.jan),
					distanceReducer(months.feb),
					distanceReducer(months.mar),
					distanceReducer(months.apr),
					distanceReducer(months.may),
					distanceReducer(months.jun),
					distanceReducer(months.jul),
					distanceReducer(months.aug),
					distanceReducer(months.sept),
					distanceReducer(months.oct),
					distanceReducer(months.nov),
					distanceReducer(months.dec),
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
		<motion.div
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			variants={scrollAnimationVariants}
			className="relative flex h-96 w-full flex-row justify-center"
		>
			<Bar className="mx-10" data={data} options={chartOptions} />
		</motion.div>
	);
};

export default MonthlyDistanceChart;
