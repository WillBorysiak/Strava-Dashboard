import { CursorClickIcon, MailOpenIcon, UsersIcon } from '@heroicons/react/outline';
import Container from '../layout/Container';

const stats = [
	{ id: 1, name: 'Total Subscribers', stat: '71,897', icon: UsersIcon },
	{ id: 2, name: 'Avg. Open Rate', stat: '58.16%', icon: MailOpenIcon },
	{ id: 3, name: 'Avg. Click Rate', stat: '24.57%', icon: CursorClickIcon },
	{ id: 4, name: 'Avg. Click Rate', stat: '24.57%', icon: CursorClickIcon },
	{ id: 5, name: 'Avg. Click Rate', stat: '24.57%', icon: CursorClickIcon },
];

interface StatsTypes {
	data: {
		all_ride_totals: {
			count: number;
			distance: number;
		};
	};
}

const Stats = (props: StatsTypes) => {
	// const rideTotals = props.data.all_ride_totals;
	// console.log(rideTotals);

	const statsArray = [
		{ title: 'Total Rides', count: 25 },
		{ title: 'Total Distance', count: 10000 },
	];

	return (
		<Container>
			<dl className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
				{stats.map((item: any, index: number) => (
					<div key={index} className="relative overflow-hidden rounded-lg bg-white px-4 pt-5  shadow sm:px-6 sm:pt-6">
						<dt>
							<div className="absolute rounded-md bg-indigo-500 p-3">
								<item.icon className="h-6 w-6 text-white" aria-hidden="true" />
							</div>
							<p className="ml-16 truncate text-sm font-medium text-gray-500">{item.title}</p>
						</dt>
						<dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
							<p className="text-2xl font-semibold text-gray-900">{item.count}</p>
						</dd>
					</div>
				))}
			</dl>
		</Container>
	);
};

export default Stats;
