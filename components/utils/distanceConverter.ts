export const distanceConverter = (value: number, decimalPlace: number, kmString: boolean) => {
	let distanceInKm = value / 1000;
	let distanceToDecimal = distanceInKm.toFixed(decimalPlace);
	if (!kmString) {
		return distanceToDecimal;
	} else {
		return distanceToDecimal + 'km';
	}
};
