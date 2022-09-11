import { StatsTypes } from './stats.model';
import { ActivityTypes } from './activity.model';

export interface RunningProps {
	stats: StatsTypes;
	activities: ActivityTypes[];
}
