export const speedConverter = (value: number) => {
	const speedKmph = value * 3.6;
	const speed = speedKmph.toFixed(1);

	return speed;
};
