export interface Stats {
	biggest_ride_distance: number;
	biggest_climb_elevation_gain: number;
	all_ride_totals: StatTotal;
}

export interface StatTotal {
	count: number;
	distance: number;
	elevation_gain: number;
	moving_time: number;
}
