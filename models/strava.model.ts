import { StatsTypes } from './stats.model';
import { ChartTypes } from './chart.model';
import { ActivityTypes } from './activity.model';
import { SegmentTypes } from './segment.model';

export interface Strava {
	stats: StatsTypes;
	chartData: ChartTypes;
	activities: ActivityTypes[];
	segments: SegmentTypes[];
}
