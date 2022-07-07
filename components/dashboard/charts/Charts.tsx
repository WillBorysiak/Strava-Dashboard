import React from 'react';
import { ChartTypes as ChartModel } from '../../../models/chart.model';
import Container from '../../layout/Container';
import Heading from '../../typography/Heading';
import MonthlyDistanceChart from './MonthlyDistanceChart';
import WeeklyDistanceChart from './WeeklyDistanceChart';
import WeeklyProgress from './WeeklyProgress';

interface ChartTypes {
	activities: ChartModel[];
}

const Charts = ({ activities }: ChartTypes) => {
	return (
		<Container>
			<div className="mt-5 mb-5 flex flex-col">
				<Heading text="Monthly Distances" />
				<div className="mt-5 mb-5 flex justify-center">
					<MonthlyDistanceChart activities={activities} />
				</div>
				<Heading text="Weekly Distances" />
				<div className="mt-5 mb-5 flex justify-center">
					<WeeklyDistanceChart activities={activities} />
				</div>
				<WeeklyProgress />
			</div>
		</Container>
	);
};

export default Charts;
