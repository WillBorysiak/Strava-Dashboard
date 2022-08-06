import dayjs from 'dayjs';
import { Bar } from 'react-chartjs-2';
import { chartOptions } from './chartOptions';
import { ChartTypes as ChartModel } from '../../../models/chart.model';
import { distanceReducer } from '../../utils/distanceReducer';
import { months } from '../../data/monthlyDistanceArray';
import { motion } from 'framer-motion';
import { scrollAnimationVariants } from '../../utils/scrollAnimationVariants';
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

const MonthlyDistanceChart = ({ activities }: ChartTypes) => {
	activities.forEach(item => {
		item.month = dayjs(item.start_date).month();
		if (item.month === 3) months.apr.push(item.distance);
		if (item.month === 4) months.may.push(item.distance);
		if (item.month === 5) months.jun.push(item.distance);
		if (item.month === 6) months.jul.push(item.distance);
		if (item.month === 7) months.aug.push(item.distance);
	});

	const data = {
		labels: ['April', 'May', 'June', 'July', 'Aug'],
		datasets: [
			{
				label: 'Distance in Km',
				data: [
					distanceReducer(months.apr),
					distanceReducer(months.may),
					distanceReducer(months.jun),
					distanceReducer(months.jul),
					distanceReducer(months.aug),
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
