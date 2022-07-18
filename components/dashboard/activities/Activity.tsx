import { useState } from 'react';
import { distanceConverter } from '../../utils/distanceConverter';
import { removeEmoji } from '../../utils/removeEmoji';
import { hoursMinsConverter } from '../../utils/hoursMinsConverter';
import { speedConverter } from '../../utils/speedConverter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDay } from '@fortawesome/pro-solid-svg-icons';
import { ActivityTypes as ActivityModel } from '../../../models/activity.model';
import dayjs from 'dayjs';

interface ActivityTypes {
	data: ActivityModel;
}

const Activity = (props: ActivityTypes) => {
	const [open, setOpen] = useState(false);
	const { name, distance, start_date, moving_time, elev_high, average_speed, average_watts, average_heartrate, week } =
		props.data;

	return (
		<li className={open ? 'my-3 font-oswald text-zinc backdrop-brightness-[0.7]' : 'my-3 font-oswald text-zinc'}>
			<div className="hover:cursor-pointer" onClick={() => setOpen(!open)}>
				<div className="px-4 py-2 sm:px-6">
					<div className="flex items-center justify-between">
						<h3 className="text-xl font-bold text-orange md:text-2xl">{removeEmoji(name)}</h3>
						<div className="flex flex-row-reverse">
							<p className="ml-5 whitespace-nowrap text-lg font-bold sm:text-xl">{`Week ${week - 16}`}</p>
						</div>
					</div>
					<div className="mt-2 sm:flex sm:justify-between">
						<div className="sm:flex">
							<p className="flex items-center text-lg font-bold sm:text-xl ">{distanceConverter(distance, 2, true)}</p>
						</div>
						<div className="mt-2 flex items-center text-lg font-bold sm:text-xl">
							<FontAwesomeIcon icon={faCalendarDay} size="1x" className="mr-3" />
							<p>{dayjs(start_date).format('ddd DD MMM YYYY')}</p>
						</div>
					</div>
					<div className={open ? 'block' : 'hidden'}>
						<div className="mt-3 flex w-full flex-col justify-between text-lg sm:justify-start sm:text-xl">
							<div className="flex flex-col xl:flex-row xl:gap-x-10">
								<p>
									<span className="mr-1 font-bold italic">Duration ⏲️ - </span> {hoursMinsConverter(moving_time)}
								</p>
								<p>
									<span className="mr-1 font-bold italic">Elevation ⛰️ - </span> {elev_high}m
								</p>
							</div>
							<div className="mt-3 flex flex-col xl:flex-row xl:gap-x-10">
								<p>
									<span className="mr-1 font-bold italic">Average Speed 💨 - </span> {speedConverter(average_speed)}
									kmph
								</p>
								<p>
									<span className="mr-1 font-bold italic">Average Watts ⚡ - </span> {average_watts.toFixed(0)}W
								</p>
								<p>
									<span className="mr-1 font-bold italic">Average Heart Rate ❤️ - </span>
									{average_heartrate.toFixed(0)}bpm
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
