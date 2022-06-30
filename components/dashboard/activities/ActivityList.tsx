import { useState } from 'react';

import Heading from '../../typography/Heading';
import Activity from './Activity';
import { activityArray } from '../../data/activityArray';

import ActivityFilter from './ActivityFilter';

const ActivityList = () => {
	const [sortValue, setSortValue] = useState<null | number | string>(5);

	return (
		<section className="mx-5 overflow-hidden shadow sm:rounded-md">
			<Heading text="Workouts" />
			<div className="mt-3 flex w-full flex-row justify-around">
				<ActivityFilter sortSelection={setSortValue} />
			</div>
			<ul role="list" className="mt-3 rounded-md">
				{activityArray.map((activity, index: number) => (
					<Activity key={index} data={activity} />
				))}
			</ul>
		</section>
	);
};

export default ActivityList;
