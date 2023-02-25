import { RunningProps } from '../../../models/runningProps.model';
import { useYearStore } from '../../../store/yearStore';
import Charts from '../charts/Charts';
import SelectYear from '../charts/SelectYear';
import Activities from './activities/RunningActivities';
import Stats from './stats/RunningStats';

const Running = (props: RunningProps) => {
	const { selectedYear } = useYearStore();

	const runActivities = props.activities.filter(item => item.sport_type === 'Run');
	const yearlyActivities = runActivities.filter(run => run.year === selectedYear);

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
