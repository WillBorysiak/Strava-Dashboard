import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDay } from '@fortawesome/pro-solid-svg-icons';
import StravaIcon from '../../utils/StravaIcon';

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
		<li className="my-3 font-oswald text-zinc backdrop-brightness-[0.8]">
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
						<h3 className="truncate text-2xl font-bold text-orange">{content.name}</h3>
						<StravaIcon />
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
						<div className="mt-3 flex w-full flex-col justify-between text-lg sm:flex-col sm:justify-start sm:text-xl">
							<div className="flex flex-col md:flex-row md:space-x-5">
								<p>
									<span className="mr-1 font-bold italic">Duration:</span> 1h 30m
								</p>
								<p>
									<span className="mr-1 font-bold italic">Elevation:</span> 500m
								</p>
							</div>
							<div className="flex flex-col md:mt-1 md:flex-row md:space-x-5">
								<p>
									<span className="mr-1 font-bold italic">Average Speed:</span> 30km
								</p>
								<p>
									<span className="mr-1 font-bold italic">Average Watts:</span> 150w
								</p>
								<p>
									<span className="mr-1 font-bold italic">Average Heart Rate: </span> 140bpm
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</li>
	);
};

export default Activity;
