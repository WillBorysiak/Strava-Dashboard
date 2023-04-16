export interface ChartModel {
	name: string;
	id: number;
	start_date: string | number;
	distance: number;
	moving_time: number;
	elev_high: number;
	average_speed: number;
	average_heartrate: number;
	month: number;
	week: number;
	year: number;
}
