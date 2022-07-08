import React, { useState } from 'react';
import { ChartTypes as ChartModel } from '../../../models/chart.model';
import { WeeklyProgressTypes } from '../../../models/weeklyProgress.model';
import Container from '../../layout/Container';
import Heading from '../../typography/Heading';
import MonthlyDistanceChart from './MonthlyDistanceChart';
import WeeklyDistanceChart from './WeeklyDistanceChart';
import WeeklyProgress from './WeeklyProgress';

interface ChartTypes {
	chartData: ChartModel[];
}

const Charts = ({ chartData }: ChartTypes) => {
	const [weeklyTargets, setWeeklyTargets] = useState();

	console.log(weeklyTargets);

	return (
		<Container>
			<div className="mt-5 mb-5 flex flex-col">
				<Heading text="Monthly Distances" />
				<div className="mt-5 mb-5 flex justify-center">
					<MonthlyDistanceChart activities={chartData} />
				</div>
				<Heading text="Weekly Distances" />
				<div className="mt-5 mb-5 flex justify-center">
					<WeeklyDistanceChart activities={chartData} data={setWeeklyTargets} />
				</div>
				<WeeklyProgress weeklyTargets={weeklyTargets} />
			</div>
		</Container>
	);
};

export default Charts;
