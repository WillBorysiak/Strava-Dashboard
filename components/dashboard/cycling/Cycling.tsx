import { CyclingProps } from '../../../models/cyclingProps.model';
import Charts from '../charts/Charts';
import CyclingActivities from './activities/CyclingActivities';
import Segments from './segments/Segments';
import Stats from './stats/CyclingStats';

const Cycling = (props: CyclingProps) => {
	// Filter by rides
	const rideActivities = props.activities.filter(item => item.sport_type === 'Ride');

	return (
		<>
			<Stats stats={props.stats} />
			<Charts chartData={rideActivities} />
			<CyclingActivities activities={rideActivities} />
			<Segments segments={props.segments} />
		</>
	);
};

export default Cycling;
