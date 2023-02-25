import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer } from 'react-leaflet';

import { SegmentTypes as SegmentModel } from '../../../../../models/segment.model';
import MapMarker from './MapMarker';

// **DEV TOOL**
// Lat / Lng Click Event
// const LocationFinderDummy = () => {
// 	const map = useMapEvents({
// 		click(e) {
// 			console.log(e.latlng);
// 		},
// 	});
// 	return null;
// };

interface SegmentTypes {
	segments: SegmentModel[];
}

const map = ({ segments }: SegmentTypes) => {
	return (
		<MapContainer
			style={{ height: '400px', width: '100%' }}
			center={[53.07023690656067, -1.4902686632686215]}
			zoom={11}
			scrollWheelZoom={true}
		>
			{segments.map((item, index) => {
				return <MapMarker key={index} data={item} />;
			})}
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
		</MapContainer>
	);
};

export default map;
