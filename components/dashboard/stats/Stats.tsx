import { distanceConverter } from '../../../utils/distanceConverter';
import { elevationConverter } from '../../../utils/elevationConverter';
import { timeConverter } from '../../../utils/timeConverter';
import Container from '../../layout/Container';
import { rideIcon } from './StatsIcons';
import { distanceIcon } from './StatsIcons';
import { timeIcon } from './StatsIcons';
import { elevationIcon } from './StatsIcons';
import { longestRideIcon } from './StatsIcons';
import { biggestClimbIcon } from './StatsIcons';

interface StatsTypes {
	data: {
		biggest_ride_distance: number;
		biggest_climb_elevation_gain: number;
		all_ride_totals: {
			count: number;
			distance: number;
			elevation_gain: number;
			moving_time: number;
		};
	};
}

const Stats = (props: StatsTypes) => {
	console.log(props.data);
	const rideTotals = props.data.all_ride_totals;
	const biggestRide = props.data.biggest_ride_distance;
	const biggestClimb = props.data.biggest_climb_elevation_gain;
	const { count, distance, elevation_gain, moving_time } = rideTotals;

	const distanceKm = distanceConverter(distance, 2);
	const time = timeConverter(moving_time);
	const elevationKm = elevationConverter(elevation_gain);
	const distanceRecord = distanceConverter(biggestRide, 1);
	const climbRecord = biggestClimb.toFixed(0) + 'm';

	const stats = [
		{ id: 1, name: 'Total Rides', stat: count, icon: rideIcon },
		{ id: 2, name: 'Total Distance', stat: distanceKm, icon: distanceIcon },
		{ id: 3, name: 'Total Time', stat: time, icon: timeIcon },
		{ id: 4, name: 'Total Elevation', stat: elevationKm, icon: elevationIcon },
		{ id: 5, name: 'Longest Ride', stat: distanceRecord, icon: longestRideIcon },
		{ id: 6, name: 'Biggest Climb', stat: climbRecord, icon: biggestClimbIcon },
	];

	return (
		<Container>
			<dl className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
				{stats.map((item: any, index: number) => (
					<div
						key={index}
						className="relative overflow-hidden rounded-lg bg-white px-4 pt-5 font-oswald  shadow sm:px-6 sm:pt-6"
					>
						<dt>
							<div className="absolute rounded-md bg-orange-600 p-3">{item.icon}</div>
							<p className="ml-20 truncate font-oswald text-sm font-medium text-gray-500">{item.name}</p>
						</dt>
						<dd className="ml-20 flex items-baseline pb-6 sm:pb-7">
							<p className="text-2xl font-semibold text-gray-900">{item.stat}</p>
						</dd>
					</div>
				))}
			</dl>
		</Container>
	);
};

export default Stats;
