export const captalise = (value: string) => {
	const captalisedString = value.replace(/(?:^|\s|[-"'([{])+\S/g, c => c.toUpperCase());
	return captalisedString;
};
