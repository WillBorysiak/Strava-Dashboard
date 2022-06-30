import { useState } from 'react';

import Heading from '../../typography/Heading';
import Activity from './Activity';
import ActivityFilter from './ActivityFilter';

interface ActivityListTypes {
	data: {
		map: any;
		activites: [];
	};
}

interface ActivityTypes {
	id: number;
	activity: {
		name: string;
		id: number;
		start_date: string;
		distance: number;
		moving_time: number;
		elev_high: number;
		average_watts: number;
		average_speed: number;
		average_heartrate: number;
	};
}

const ActivityList = (props: ActivityListTypes) => {
	const [resultsValue, setResultsValue] = useState<number | string>(5);
	const [sortValue, setSortValue] = useState<string>('recent');

	const activites = props.data;

	const test = activites.slice(0, 10);

	return (
		<section className="mx-5 overflow-hidden shadow sm:rounded-md">
			<Heading text="Workouts" />
			<div className="mt-3 flex w-full flex-row justify-around">
				<ActivityFilter resultSelection={setResultsValue} sortSelection={setSortValue} />
			</div>
			<ul role="list" className="mt-3 rounded-md">
				{test.map((activity: ActivityTypes) => (
					<Activity key={activity.id} data={activity} />
				))}
			</ul>
		</section>
	);
};

export default ActivityList;
