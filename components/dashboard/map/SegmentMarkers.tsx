import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const SegmentMarkers = () => {
	const icon = L.icon({
		iconUrl: '/icons/marker-icon-red.png',
		iconSize: [15, 25],
	});
	return (
		<>
			{/* Belper Ln Climb */}
			<Marker position={[53.08275198757087, -1.5636045909055878]} icon={icon}>
				<Popup className="font-oswald text-lg sm:text-base">Belper Ln Climb</Popup>
			</Marker>
			{/* Wessington Long Climb */}
			<Marker position={[53.115751642584456, -1.4474695625208533]} icon={icon}>
				<Popup className="font-oswald text-lg sm:text-base">Wessington Long Climb</Popup>
			</Marker>
			{/* Run To the Lights (Matlock) */}
			<Marker position={[53.125286079472126, -1.5597387542847476]} icon={icon}>
				<Popup className="font-oswald text-lg sm:text-base">Run To the Lights (Matlock)</Popup>
			</Marker>
			{/* Cromford T'Middleton Top */}
			<Marker position={[53.10312843200905, -1.5658935596297097]} icon={icon}>
				<Popup className="font-oswald text-lg sm:text-base">Cromford T&#39;Middleton Top</Popup>
			</Marker>
			{/* North Mill To Over Lane */}
			<Marker position={[53.02371313870034, -1.5140090129053487]} icon={icon}>
				<Popup className="font-oswald text-lg sm:text-base">North Mill To Over Lane</Popup>
			</Marker>
			{/* Matlock - Ambergate */}
			<Marker position={[53.08554561592434, -1.5077818511721854]} icon={icon}>
				<Popup className="font-oswald text-lg sm:text-base">Matlock - Ambergate</Popup>
			</Marker>
			{/* Sir John Warren > Codnor-Denby Lane */}
			<Marker position={[53.03890743701596, -1.3756697237787299]} icon={icon}>
				<Popup className="font-oswald text-lg sm:text-base">Sir John Warren &gt; Codnor-Denby Lane</Popup>
			</Marker>
			{/* Bullbridge To Top Of Shuckstone Ln */}
			<Marker position={[53.07025454086428, -1.470203806299615]} icon={icon}>
				<Popup className="font-oswald text-lg sm:text-base">Bullbridge To Top Of Shuckstone Ln</Popup>
			</Marker>
			{/* Whatstandwell To Cromford */}
			<Marker position={[53.095990286893944, -1.531212766843642]} icon={icon}>
				<Popup className="font-oswald text-lg sm:text-base">Whatstandwell To Cromford</Popup>
			</Marker>
		</>
	);
};

export default SegmentMarkers;
