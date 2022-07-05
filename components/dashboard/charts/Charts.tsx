import React from 'react';
import Container from '../../layout/Container';
import Heading from '../../typography/Heading';
import MonthlyDistanceChart from './MonthlyDistanceChart';

const Charts = () => {
	return (
		<Container>
			<div>
				<Heading text="Charts" />
				<MonthlyDistanceChart />
			</div>
		</Container>
	);
};

export default Charts;
