import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import SegmentMarkers from './SegmentMarkers';

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

const map = () => {
	return (
		<MapContainer
			style={{ height: '400px', width: '100%' }}
			center={[53.07023690656067, -1.4902686632686215]}
			zoom={10}
			scrollWheelZoom={true}
		>
			<SegmentMarkers />
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
		</MapContainer>
	);
};

export default map;
