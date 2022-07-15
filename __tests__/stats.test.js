import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Stats from '../components/dashboard/stats/Stats';

test('should render stat title and values', () => {
	const data = {
		stats: {
			all_ride_totals: {
				count: 1,
				distance: 10000,
				moving_time: 3600,
				elevation_gain: 1000,
			},
			biggest_ride_distance: 25000,
			biggest_climb_elevation_gain: 100,
		},
	};

	const { getByText } = render(<Stats stats={data.stats} />);
	// Total Rides
	const totalRidesTitle = getByText('Total Rides');
	const totalRidesValue = getByText(data.stats.all_ride_totals.count);
	expect(totalRidesTitle).toBeVisible();
	expect(totalRidesValue).toBeVisible();
	// Total Distance
	const totalDistanceTitle = getByText('Total Distance');
	const totalDistanceValue = getByText('10.00km');
	expect(totalDistanceTitle).toBeVisible();
	expect(totalDistanceValue).toBeVisible();
	// // Total Time
	const totalTimeTitle = getByText('Total Time');
	const totalTimeValue = getByText('1h 0m');
	expect(totalTimeTitle).toBeVisible();
	expect(totalTimeValue).toBeVisible();
	// // Total Elevation
	const totalElevationTitle = getByText('Total Elevation');
	const totalElevationValue = getByText('1.00km');
	expect(totalElevationTitle).toBeVisible();
	expect(totalElevationValue).toBeVisible();
	// // Longest Ride
	const longestRideTitle = getByText('Longest Ride');
	const longestRideValue = getByText('25.00km');
	expect(longestRideTitle).toBeVisible();
	expect(longestRideValue).toBeVisible();
	// // Biggest Climb
	const biggestClimbTitle = getByText('Biggest Climb');
	const biggestClimbValue = getByText('100m');
	expect(biggestClimbTitle).toBeVisible();
	expect(biggestClimbValue).toBeVisible();
});
