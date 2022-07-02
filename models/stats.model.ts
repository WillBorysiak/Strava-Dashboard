export interface StatsTypes {
	biggest_ride_distance: number;
	biggest_climb_elevation_gain: number;
	all_ride_totals: StatRideTotals;
	message: string;
}

export interface StatRideTotals {
	count: number;
	distance: number;
	elevation_gain: number;
	moving_time: number;
}
