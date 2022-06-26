export default async (req, res) => {
	let key = process.env.STRAVA_KEY;
	const response = await fetch('https://strava.com/api/v3/athletes/90122035/stats?access_token=' + key);
	const json = await response.json();

	return res.status(200).json({
		json,
	});
};
