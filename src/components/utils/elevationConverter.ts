export const elevationConverter = (value: number) => {
	let elevationInKm = value / 1000;
	let elevationToDecimal = elevationInKm.toFixed(2);
	return elevationToDecimal + 'km';
};
