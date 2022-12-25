import dayjs from 'dayjs';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ActivityTypes as ActivityModel } from '../../../../models/activity.model';
import Heading from '../../../typography/Heading';
import { scrollAnimationVariants } from '../../../utils/scrollAnimationVariants';
import ActivityFilter from './ActivityFilter';
import CyclingActivity from './CyclingActivity';

interface ActivityTypes {
	activities: ActivityModel[];
}

const Activities = ({ activities }: ActivityTypes) => {
	const [resultsValue, setResultsValue] = useState<number>(5);
	const [sortValue, setSortValue] = useState<string>('recent');

	return (
		<section className="mx-5 overflow-hidden shadow">
			<Heading text="Workouts" />
			<motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scrollAnimationVariants}>
				<div className="mt-5 mb-5 flex w-full flex-row justify-around">
					<ActivityFilter resultSelection={setResultsValue} sortSelection={setSortValue} />
				</div>

				<motion.ul layout role="list" className="mt-3 flex flex-col gap-x-5 rounded-md">
					{activities
						.sort((a, b) => {
							if (sortValue === 'recent' && dayjs(a.start_date).isBefore(b.start_date)) return -1;
							if (sortValue === 'oldest' && dayjs(a.start_date).isAfter(b.start_date)) return -1;
							if (sortValue === 'longest' && b.distance > a.distance) return -1;
							if (sortValue === 'shortest' && a.distance > b.distance) return -1;
							return 0;
						})
						.slice(activities.length - resultsValue)
						.reverse()
						.map(activity => (
							<CyclingActivity key={activity.id} data={activity} />
						))}
				</motion.ul>
			</motion.div>
		</section>
	);
};

export default Activities;
