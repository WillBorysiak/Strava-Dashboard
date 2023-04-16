import { ActivityModel } from '../models/activity.model';
import { StatsModel } from '../models/stats.model';
import { useYearStore } from '../store/yearStore';
import Charts from './dashboard/charts/Charts';
import SelectYear from './dashboard/charts/SelectYear';
import Activities from './dashboard/activities/Activities';
import Stats from './dashboard/stats/RunningStats';

const Running = (props: { stats: StatsModel; activities: ActivityModel[] | undefined }) => {
	const { selectedYear } = useYearStore();

	let yearlyActivities;
	const activities = props.activities;

	if (activities) yearlyActivities = activities.filter(run => run.year === selectedYear);

	return (
		<>
			<Stats stats={props.stats} />
			<SelectYear />
			<Charts chartData={yearlyActivities} />
			<Activities activities={yearlyActivities} />
		</>
	);
};

export default Running;
