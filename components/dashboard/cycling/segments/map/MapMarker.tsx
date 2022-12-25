import L from 'leaflet';
import { Marker, Popup } from 'react-leaflet';
import { captalise } from '../../../../utils/capitalise';

const icon = L.icon({
	iconUrl: '/icons/marker-icon-red.png',
	iconSize: [15, 25],
});

interface MarkerTypes {
	data: {
		name: string;
		mapLocation: any;
	};
}

const MapMarker = (props: MarkerTypes) => {
	return (
		<Marker position={props.data.mapLocation} icon={icon}>
			<Popup className="font-oswald text-lg sm:text-base">{captalise(props.data.name)}</Popup>
		</Marker>
	);
};

export default MapMarker;
