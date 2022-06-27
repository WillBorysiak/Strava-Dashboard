export const timeConverter = (value: number) => {
	let hours = Math.floor(value / 3600);
	let minutes = Math.floor((value - hours * 3600) / 60);

	if (hours < 10) {
		hours = 0 + hours;
	}
	if (minutes < 10) {
		minutes = 0 + minutes;
	}

	return `${hours}h ${minutes}m`;
};
