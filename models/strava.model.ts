import { ActivityTypes } from './activity.model';
import { StatsTypes } from './stats.model';
import { SegmentTypes } from './segment.model';

export interface Strava {
	activities: ActivityTypes[];
	stats: StatsTypes;
	segments: SegmentTypes[];
}
