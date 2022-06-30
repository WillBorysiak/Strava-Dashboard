export const distanceConverter = (value: number, decimalPlace: number) => {
	let distanceInKm = value / 1000;
	let distanceToDecimal = distanceInKm.toFixed(decimalPlace);
	return distanceToDecimal + 'km';
};
