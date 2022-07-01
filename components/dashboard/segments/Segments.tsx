import { SegmentTypes as SegmentModel } from '../../../models/segment.model';
import Container from '../../layout/Container';
import Heading from '../../typography/Heading';
import Segment from './Segment';

interface SegmentTypes {
	segments: SegmentModel[];
}

const Segments = ({ segments }: SegmentTypes) => {
	console.log(segments);
	return (
		<Container>
			<Heading text="Segments" />
			<article className="lg: items-around mt-5  grid grid-cols-1  gap-3 sm:grid-cols-2 lg:grid-cols-3">
				{segments.map(item => (
					<Segment key={item.id} data={item} />
				))}
			</article>
		</Container>
	);
};
export default Segments;
