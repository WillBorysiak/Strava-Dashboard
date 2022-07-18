import dynamic from 'next/dynamic';
import { SegmentTypes as SegmentModel } from '../../../models/segment.model';
import Container from '../../layout/Container';
import Heading from '../../typography/Heading';
import Segment from './Segment';

interface SegmentTypes {
	segments: SegmentModel[];
}

const Segments = ({ segments }: SegmentTypes) => {
	const Map = dynamic(() => import('../map/map'), { ssr: false });
	return (
		<Container>
			<Heading text="Segments" />
			<article className="items-around mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
				{segments.map(item => (
					<Segment key={item.id} data={item} />
				))}
			</article>
			{/* Segment Map */}
			<div className="mt-5 h-96">
				<Map />
			</div>
		</Container>
	);
};
export default Segments;
