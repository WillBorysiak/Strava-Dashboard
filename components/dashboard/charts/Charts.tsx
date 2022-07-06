import React from 'react';
import { ChartTypes as ChartModel } from '../../../models/chart.model';
import Container from '../../layout/Container';
import Heading from '../../typography/Heading';
import MonthlyDistanceChart from './MonthlyDistanceChart';

interface ChartTypes {
	activities: ChartModel[];
}

const Charts = ({ activities }: ChartTypes) => {
	return (
		<Container>
			<Heading text="Monthly Distances" />
			<div className="mt-10 mb-10 flex flex-col">
				<div className=" flex justify-center">
					<MonthlyDistanceChart activities={activities} />
				</div>
			</div>
		</Container>
	);
};

export default Charts;
