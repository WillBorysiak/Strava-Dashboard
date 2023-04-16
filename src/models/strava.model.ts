import { StatsModel } from './stats.model';
import { ChartModel } from './chart.model';
import { ActivityModel } from './activity.model';
import { SegmentModel } from './segment.model';

export interface StravaModel {
	stats: StatsModel;
	chartData: ChartModel;
	activities: ActivityModel[];
	segments: SegmentModel[];
}
