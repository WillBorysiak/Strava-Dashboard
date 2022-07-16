import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Activity from '../components/dashboard/activities/Activity';

test('should render activity with values', () => {
	const key = 1;
	const data = {
		name: 'Test Activity',
		distance: 10000,
		start_date: '2022-01-01T10:15:51Z',
		moving_time: 3600,
		elev_high: 100,
		average_speed: 6.95,
		average_watts: 100,
		average_heartrate: 140,
		week: 17,
	};

	const { getByText } = render(<Activity key={key} data={data} />);
	// Name
	const name = getByText('Test Activity');
	expect(name).toBeVisible();
	// Distance
	const distance = getByText('10.00km');
	expect(distance).toBeVisible();
	// Start Date
	const startDate = getByText('Sat 01 Jan 2022');
	expect(startDate).toBeVisible();
	// Moving Time
	const movingTime = getByText('1h 0m');
	expect(movingTime).toBeVisible();
	// Elev High
	const elavHigh = getByText('100m');
	expect(elavHigh).toBeVisible();
	// Average Speed
	const averageSpeed = getByText('25.0kmph');
	expect(averageSpeed).toBeVisible();
	// Average Watts
	const averageWatts = getByText('100W');
	expect(averageWatts).toBeVisible();
	// Average Heartrate
	const averageHeartrate = getByText('140bpm');
	expect(averageHeartrate).toBeVisible;
	// Week
	const week = getByText('Week 1');
	expect(week).toBeVisible;
});
