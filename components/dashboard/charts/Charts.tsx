import React from 'react';
import Container from '../../layout/Container';
import Heading from '../../typography/Heading';
import MonthlyDistanceChart from './MonthlyDistanceChart';

const Charts = () => {
	return (
		<Container>
			<Heading text="Charts" />
			<div className="mt-5 flex justify-center">
				<MonthlyDistanceChart />
			</div>
		</Container>
	);
};

export default Charts;
