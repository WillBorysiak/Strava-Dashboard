export interface StatsTypes {
	biggest_ride_distance: number;
	biggest_climb_elevation_gain: number;
	all_run_totals: Totals;
	all_ride_totals: Totals;
	message: string;
}

export interface Totals {
	count: number;
	distance: number;
	elevation_gain: number;
	moving_time: number;
}
