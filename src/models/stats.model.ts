export interface StatsModel {
	biggest_ride_distance: number;
	biggest_climb_elevation_gain: number;
	all_run_totals: TotalsModel;
	all_ride_totals: TotalsModel;
	message: string;
}

export interface TotalsModel {
	count: number;
	distance: number;
	elevation_gain: number;
	moving_time: number;
}
