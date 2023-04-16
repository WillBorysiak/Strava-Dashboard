import { useState } from 'react';

import { ChartModel } from '../../../models/chart.model';
import { WeeklyProgressModel } from '../../../models/weeklyProgress.model';
import Container from '../../layout/Container';
import Heading from '../../typography/Heading';
import MonthlyDistanceChart from './MonthlyDistanceChart';
import WeeklyDistanceChart from './WeeklyDistanceChart';

const Charts = (props: { chartData: ChartModel[] | undefined }) => {
	// const [weeklyTargets, setWeeklyTargets] = useState<WeeklyProgressModel>();

	const chartData = props.chartData;

	return (
		<Container>
			<div className="mb-5 mt-5 flex flex-col">
				<Heading text="Monthly Totals" />
				<div className="mb-5 mt-5 flex flex-col justify-center">
					<MonthlyDistanceChart activities={chartData} />
				</div>
				<Heading text="Weekly Distances" />
				<div className="mb-5 mt-5 flex justify-center">
					<WeeklyDistanceChart activities={chartData} />
				</div>
			</div>
		</Container>
	);
};

export default Charts;
