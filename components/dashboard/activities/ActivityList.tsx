import { useState } from 'react';

import Heading from '../../typography/Heading';
import Activity from './Activity';
import ActivityFilter from './ActivityFilter';
import { Activity as ActivityModel } from '../../../models/activity.model';
import dayjs from 'dayjs';

interface ActivityListTypes {
	activities: ActivityModel[];
}

const ActivityList = ({ activities }: ActivityListTypes) => {
	const [resultsValue, setResultsValue] = useState<number>(5);
	const [sortValue, setSortValue] = useState<string>('recent');

	return (
		<section className="mx-5 overflow-hidden shadow sm:rounded-md">
			<Heading text="Workouts" />
			<div className="mt-3 flex w-full flex-row justify-around">
				<ActivityFilter resultSelection={setResultsValue} sortSelection={setSortValue} />
			</div>
			<ul role="list" className="mt-3 rounded-md">
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
						<Activity key={activity.id} data={activity} />
					))}
			</ul>
		</section>
	);
};

export default ActivityList;
