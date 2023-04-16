export const dateConverter = (value: string) => {
	let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
	let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Sept', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
	const dateObject = new Date(value);
	// Day
	const dayValue = dateObject.getDay();
	const day = days[dayValue];
	// Date
	const date = dateObject.getDate();
	// Month
	const monthValue = dateObject.getMonth();
	const month = months[monthValue];
	// Year
	const year = dateObject.getFullYear();

	let dateString = `${day} ${date} ${month} ${year}`;

	return dateString;
};
