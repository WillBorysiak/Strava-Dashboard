import { useState } from 'react';
import Image from 'next/image';
import { SegmentTypes as SegmentModel } from '../../../models/segment.model';
import { distanceConverter } from '../../utils/distanceConverter';
import { secondsMinsConverter } from '../../utils/secondsMinsConverter';
import { captalise } from '../../utils/capitalise';

interface SegmentTypes {
	data: SegmentModel;
}

const Segment = (props: SegmentTypes) => {
	const [open, setOpen] = useState(false);
	const content = props.data;
	const { name, id, city, distance, elevation_high, maximum_grade, pr_time } = content;
	const image = `/segments/${id}.png`;

	return (
		<div
			className="relative overflow-hidden rounded-sm font-oswald"
			onClick={() => {
				setOpen(!open);
			}}
		>
			<div className="relative z-0 flex h-52 w-full">
				<Image className="rounded-sm shadow-lg" src={image} alt={name} layout="fill" objectFit="cover" />
				{!open && (
					<div className="z-10 flex w-full flex-col items-center justify-center">
						<p className=" break-normal font-oswald text-2xl font-medium text-zinc   backdrop-brightness-50 md:text-3xl">
							{captalise(name)}
						</p>
						<p className="text-xl italic text-zinc backdrop-brightness-50 md:text-3xl">{city}</p>
					</div>
				)}
				{open && (
					<div className="z-10 flex w-full flex-col items-center justify-center backdrop-brightness-50">
						<p className="text-xl font-semibold text-zinc">
							Distance: <span className="font-normal">{distanceConverter(distance, 2, true)}</span>
						</p>
						<p className="text-xl font-semibold text-zinc">
							Elevation: <span className="font-normal">{elevation_high}m</span>
						</p>
						<p className="text-xl font-semibold text-zinc">
							Max Gradient: <span className="font-normal">{maximum_grade}%</span>
						</p>
						<p className="mt-3 text-xl font-semibold text-zinc">
							Best Time: <span className="font-normal">{secondsMinsConverter(pr_time)}</span>
						</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default Segment;
