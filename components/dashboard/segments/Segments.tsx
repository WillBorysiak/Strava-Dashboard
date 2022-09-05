import { SegmentTypes as SegmentModel } from '../../../models/segment.model';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { scrollAnimationVariants } from '../../utils/scrollAnimationVariants';

import Container from '../../layout/Container';
import Heading from '../../typography/Heading';
import Segment from './Segment';

interface SegmentTypes {
	segments: SegmentModel[];
}

const mapLocations = [
	// Belper Ln Climb
	[53.08275198757087, -1.5636045909055878],
	//Bullbridge To Top Of Shuckstone Ln
	[53.07025454086428, -1.470203806299615],
	// Cromford T'Middleton Top
	[53.10312843200905, -1.5658935596297097],
	// Matlock - Ambergate
	[53.08554561592434, -1.5077818511721854],
	// North Mill To Over Lane
	[53.02371313870034, -1.5140090129053487],
	// Run To the Lights (Matlock)
	[53.125286079472126, -1.5597387542847476],
	// Sir John Warren > Codnor-Denby Lane
	[53.03890743701596, -1.3756697237787299],
	// Wessington Long Climb
	[53.115751642584456, -1.4474695625208533],
	// Whatstandwell To Cromford
	[53.095990286893944, -1.531212766843642],
];

const Segments = ({ segments }: SegmentTypes) => {
	const alphabeticalSegments = segments.sort((a, b) => a.name.localeCompare(b.name));
	for (let i = 0; i < alphabeticalSegments.length; i++) {
		alphabeticalSegments[i].mapLocation = mapLocations[i];
	}
	const Map = dynamic(() => import('./map/map'), { ssr: false });

	return (
		<Container>
			<Heading text="Segments" />
			<article className="items-around mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
				{alphabeticalSegments.map(item => (
					<Segment key={item.id} data={item} />
				))}
			</article>
			{/* Segment Map */}
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				variants={scrollAnimationVariants}
				className="mt-5 h-96"
			>
				<Map segments={alphabeticalSegments} />
			</motion.div>
		</Container>
	);
};
export default Segments;
