import { RunningProps } from '../../../models/runningProps.model';

import Stats from './stats/RunningStats';
import Charts from '../charts/Charts';
import Activities from './activities/RunningActivities';

const Running = (props: RunningProps) => {
	// Filter by runs
	const runActivities = props.activities.filter(item => item.sport_type === 'Run');

	return (
		<>
			<Stats stats={props.stats} />
			<Charts chartData={runActivities} />
			<Activities activities={runActivities} />
		</>
	);
};

export default Running;
