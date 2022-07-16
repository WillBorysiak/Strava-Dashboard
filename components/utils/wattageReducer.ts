export const wattageReducer = (array: number[]) => {
	let wattageRawTotal = array.reduce(function (previousValue, currentValue) {
		return previousValue + currentValue;
	}, 0);

	const wattage = wattageRawTotal / array.length;

	return wattage.toFixed(2);
};
