import { ITotals } from "../../interfaces/stats/ITotals";
import { StatTotals } from "./StatTotal";

export class Stats {
  runningTotals: StatTotals;

  constructor(runningTotals: ITotals) {
    this.runningTotals = new StatTotals(
      runningTotals.count,
      runningTotals.distance,
      runningTotals.moving_time,
      runningTotals.elevation_gain,
    );
  }
}
