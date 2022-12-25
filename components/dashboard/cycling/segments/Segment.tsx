import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { SegmentTypes as SegmentModel } from '../../../../models/segment.model';
import { captalise } from '../../../utils/capitalise';
import { distanceConverter } from '../../../utils/distanceConverter';
import { scrollAnimationVariants } from '../../../utils/scrollAnimationVariants';
import { secondsMinsConverter } from '../../../utils/secondsMinsConverter';

interface SegmentTypes {
	data: SegmentModel;
}

const Segment = (props: SegmentTypes) => {
	const [open, setOpen] = useState(false);
	const content = props.data;
	const { name, id, city, distance, elevation_high, maximum_grade, pr_time } = content;
	const image = `/images/segments/${id}.png`;

	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			variants={scrollAnimationVariants}
			className="relative overflow-hidden rounded-sm font-oswald"
			onClick={() => {
				setOpen(!open);
			}}
		>
			<div className="relative z-0 flex h-52 w-full">
				<Image className="rounded-sm shadow-lg" src={image} alt={name} layout="fill" objectFit="cover" />
				{!open && (
					<div className="z-10 flex w-full flex-col items-center justify-center">
						<p className="break-normal bg-darkerTransparentBg text-center font-oswald text-2xl font-medium  text-zinc md:text-3xl">
							{captalise(name)}
						</p>
						<p className="bg-darkerTransparentBg text-xl italic text-zinc md:text-3xl">{city}</p>
					</div>
				)}
				{open && (
					<div className="z-10 flex w-full flex-col items-center justify-center bg-darkerTransparentBg">
						<p className="text-2xl font-semibold text-zinc">
							Distance: <span className="font-normal italic">{distanceConverter(distance, 2, true)}</span>
						</p>
						<p className="text-2xl font-semibold text-zinc">
							Elevation: <span className="font-normal italic">{elevation_high}m</span>
						</p>
						<p className="text-2xl font-semibold text-zinc">
							Max Gradient: <span className="font-normal italic">{maximum_grade}%</span>
						</p>
						<p className="mt-3 text-2xl font-semibold text-zinc">
							Best Time: <span className="font-normal italic">{secondsMinsConverter(pr_time)}</span>
						</p>
					</div>
				)}
			</div>
		</motion.div>
	);
};

export default Segment;
