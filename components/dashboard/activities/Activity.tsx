import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDay } from '@fortawesome/pro-solid-svg-icons';

interface ActivityTypes {
	data: {
		name: string;
		date: string;
		distance: number;
	};
}

const Activity = (props: ActivityTypes) => {
	const content = props.data;
	const [open, setOpen] = useState(false);

	return (
		<li className=" font-oswald text-zinc">
			<div
				className="block hover:cursor-pointer"
				onClick={() => {
					if (open === false) {
						setOpen(true);
						return;
					}
					if (open === true) {
						setOpen(false);
						return;
					}
				}}
			>
				<div className="px-4 py-2 sm:px-6">
					<div className="flex items-center justify-between">
						<h3 className="truncate text-2xl font-bold  text-orange">{content.name}</h3>
					</div>
					<div className="mt-2 sm:flex sm:justify-between">
						<div className="sm:flex">
							<p className="flex items-center text-lg font-bold sm:text-xl ">{content.distance}km</p>
						</div>
						<div className="mt-2 flex items-center text-lg font-bold sm:mt-0 sm:text-xl">
							<FontAwesomeIcon icon={faCalendarDay} size="1x" className="mr-3" />
							<p>{content.date}</p>
						</div>
					</div>
					<div className={open ? 'block' : 'hidden'}>
						<div className="mt-3 flex w-full flex-row justify-between text-lg sm:justify-start sm:space-x-5 sm:text-xl">
							<div className="flex flex-col">
								<p>Duration: 1h 30m</p>
								<p>Elevation: 500m</p>
							</div>
							<div className="flex flex-col">
								<p>Average Speed: 30km</p>
								<p>Average Watts: 150w</p>
								<p>Average Heart Rate: 140bpm</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</li>
	);
};

export default Activity;
