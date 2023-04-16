export const secondsMinsConverter = (value: number) => {
	let minutes = Math.floor(value / 60);
	let seconds = value - minutes * 60;
	return `${minutes}m ${seconds}s`;
};
