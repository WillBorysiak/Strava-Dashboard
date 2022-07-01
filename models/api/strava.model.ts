import { Activity } from '../activity.model';
import { Stats } from '../stats.model';

export interface Strava {
	activities: Activity[];
	stats: Stats;
}
