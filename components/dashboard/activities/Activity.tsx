import { useState } from 'react';
import { distanceConverter } from '../../utils/distanceConverter';
import { removeEmoji } from '../../utils/removeEmoji';
import { timeConverter } from '../../utils/timeConverter';
import { speedConverter } from '../../utils/speedConverter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDay } from '@fortawesome/pro-solid-svg-icons';
import { Activity as ActivityModel } from '../../../models/activity.model';
import dayjs from 'dayjs';
import StravaIcon from './StravaIcon';

interface ActivityTypes {
	data: ActivityModel;
}

const Activity = (props: ActivityTypes) => {
	const content = props.data;
	const [open, setOpen] = useState(false);

	return (
		<li className="my-3 font-oswald text-zinc">
			<div className="hover:cursor-pointer" onClick={() => setOpen(!open)}>
				<div className="px-4 py-2 sm:px-6">
					<div className="flex items-center justify-between">
						<h3 className="text-xl font-bold text-orange md:text-2xl">{removeEmoji(content.name)}</h3>
						<StravaIcon />
					</div>
					<div className="mt-2 sm:flex sm:justify-between">
						<div className="sm:flex">
							<p className="flex items-center text-lg font-bold sm:text-xl ">
								{distanceConverter(content.distance, 2)}
							</p>
						</div>
						<div className="mt-2 flex items-center text-lg font-bold sm:mt-0 sm:text-xl">
							<FontAwesomeIcon icon={faCalendarDay} size="1x" className="mr-3" />
							<p>{dayjs(content.start_date).format('ddd DD MMM YYYY')}</p>
						</div>
					</div>
					<div className={open ? 'block' : 'hidden'}>
						<div className="mt-3 flex w-full flex-col justify-between text-lg sm:flex-col sm:justify-start sm:text-xl">
							<div className="flex flex-col md:flex-row md:space-x-5">
								<p>
									<span className="mr-1 font-bold italic">Duration: </span> {timeConverter(content.moving_time)}
								</p>
								<p>
									<span className="mr-1 font-bold italic">Elevation: </span> {content.elev_high}m
								</p>
							</div>
							<div className="flex flex-col md:mt-1 md:flex-row md:space-x-5">
								<p>
									<span className="mr-1 font-bold italic">Average Speed: </span> {speedConverter(content.average_speed)}
									kmph
								</p>
								<p>
									<span className="mr-1 font-bold italic">Average Watts: </span> {content.average_watts.toFixed(0)}w
								</p>
								<p>
									<span className="mr-1 font-bold italic">Average Heart Rate: </span>
									{content.average_heartrate.toFixed(0)}bpm
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
