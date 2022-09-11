import { ActivityTypes } from './activity.model';
import { SegmentTypes } from './segment.model';
import { StatsTypes } from './stats.model';

export interface CyclingProps {
	stats: StatsTypes;
	activities: ActivityTypes[];
	segments: SegmentTypes[];
}
