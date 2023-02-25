import { motion } from 'framer-motion';

import { StatsTypes } from '../../../../models/stats.model';
import Container from '../../../layout/Container';
import Heading from '../../../typography/Heading';
import { distanceConverter } from '../../../utils/distanceConverter';
import { elevationConverter } from '../../../utils/elevationConverter';
import { hoursMinsConverter } from '../../../utils/hoursMinsConverter';
import { scrollAnimationVariants } from '../../../utils/scrollAnimationVariants';
import { distanceIcon, elevationIcon, rideIcon, timeIcon } from './StatsIcons';

interface StatsType {
	stats: StatsTypes;
}

const Stats = (props: StatsType) => {
	const runTotals = props.stats.all_run_totals;
	const { count, distance, elevation_gain, moving_time } = runTotals;

	const distanceKm = distanceConverter(distance, 2, true);
	const time = hoursMinsConverter(moving_time);
	const elevationKm = elevationConverter(elevation_gain);

	const stats = [
		{ id: 1, name: 'Total Runs', stat: count, icon: rideIcon },
		{ id: 2, name: 'Total Distance', stat: distanceKm, icon: distanceIcon },
		{ id: 3, name: 'Total Time', stat: time, icon: timeIcon },
		{ id: 4, name: 'Total Elevation', stat: elevationKm, icon: elevationIcon },
	];

	return (
		<Container>
			<Heading text="Stats" />
			<dl className="mt-5 mb-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-2">
				{stats.map((item, index: number) => (
					<motion.div
						key={index}
						initial="hidden"
						animate="visible"
						variants={scrollAnimationVariants}
						className="relative overflow-hidden rounded-md bg-zinc px-2 pt-5 font-oswald  shadow sm:px-6 sm:pt-6"
					>
						<dt>
							<div className="bg-orange-600 absolute rounded-md p-3">{item.icon}</div>
							<p className="l ml-24 truncate font-oswald text-xl font-medium text-gray-900">{item.name}</p>
						</dt>
						<dd className="ml-24 flex items-baseline pb-6">
							<p className="text-2xl font-semibold italic text-gray-900">{item.stat}</p>
						</dd>
					</motion.div>
				))}
			</dl>
		</Container>
	);
};

export default Stats;
