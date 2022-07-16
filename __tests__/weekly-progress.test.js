import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import WeeklyProgress from '../components/dashboard/charts/WeeklyProgress';

test('should render weekly goals', () => {
	// Mock Values
	const weeklyTargets = {
		lastWeeksTotal: 100.0,
		thisWeeksCurrent: 50.0,
	};

	const { getByText } = render(<WeeklyProgress weeklyTargets={weeklyTargets} />);

	// Last Weeks Total Distance
	const lastWeeksTotalTitle = getByText('Last Weeks Total Distance');
	const lastWeeksTotalValue = getByText('100.00km');
	expect(lastWeeksTotalTitle).toBeVisible();
	expect(lastWeeksTotalValue).toBeVisible();
	// This Weeks Target Distance
	const thisWeeksTargetTitle = getByText('This Weeks Target Distance');
	const thisweeksTargetValue = getByText('110.00km');
	expect(thisWeeksTargetTitle).toBeVisible();
	expect(thisweeksTargetValue).toBeVisible();
	// Remaining This Week
	const thisRemainingTitle = getByText('Remaining This Week');
	const thisRemainingValue = getByText('60.00km');
	expect(thisRemainingTitle).toBeVisible();
	expect(thisRemainingValue).toBeVisible();
});
