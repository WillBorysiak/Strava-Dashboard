import { useState } from 'react';
import { CalendarIcon, LocationMarkerIcon, UsersIcon } from '@heroicons/react/solid';

const positions = [
	{
		id: 1,
		duration: '1h 30m',
		elevation: '1000m',
		average_watts: '150',
		average_speed: '25kmph',
		average_heart_rate: '140BPM',
	},
	{
		id: 2,
		duration: '1h 30m',
		elevation: '1000m',
		average_watts: '150',
		average_speed: '25kmph',
		average_heart_rate: '140BPM',
	},
	{
		id: 3,
		duration: '1h 30m',
		elevation: '1000m',
		average_watts: '150',
		average_speed: '25kmph',
		average_heart_rate: '140BPM',
	},
];

const ActivityList = () => {
	return (
		<div className="overflow-hidden bg-white shadow sm:rounded-md">
			<ul role="list" className="divide-y divide-gray-200">
				{positions.map(position => (
					<li key={position.id}>
						<a href="#" className="block hover:bg-gray-50">
							<div className="px-4 py-4 sm:px-6">
								<div className="flex items-center justify-between">
									<p className="truncate text-sm font-medium text-orange">Name of Activity</p>
								</div>
								<div className="mt-2 sm:flex sm:justify-between">
									<div className="sm:flex">
										<p className="flex items-center text-sm text-gray-500">
											<UsersIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
											Distance
										</p>
									</div>
									<div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
										<CalendarIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
										<p>Date of Activity</p>
									</div>
								</div>
							</div>
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ActivityList;
