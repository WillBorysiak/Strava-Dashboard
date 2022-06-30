import Activity from './Activity';

const activityArray = [
	{
		id: 1,
		name: 'Random Workout',
		date: '1st June 2022',
		distance: 30,
		duration: '1h 30m',
		elevation: '1000m',
		average_watts: '150',
		average_speed: '25kmph',
		average_heart_rate: '140BPM',
	},
	{
		id: 2,
		name: 'Random Workout',
		date: '1st June 2022',
		distance: 30,
		duration: '1h 30m',
		elevation: '1000m',
		average_watts: '150',
		average_speed: '25kmph',
		average_heart_rate: '140BPM',
	},
	{
		id: 3,
		name: 'Random Workout',
		date: '1st June 2022',
		distance: 30,
		duration: '1h 30m',
		elevation: '1000m',
		average_watts: '150',
		average_speed: '25kmph',
		average_heart_rate: '140BPM',
	},
];

const ActivityList = () => {
	return (
		<section className="mx-5 overflow-hidden bg-gradient-to-b from-[#3e4549] to-[#4c5458]  shadow sm:rounded-md">
			<ul role="list" className="divide-y divide-zinc">
				{activityArray.map((activity, index: number) => (
					<Activity key={index} data={activity} />
				))}
			</ul>
		</section>
	);
};

export default ActivityList;
