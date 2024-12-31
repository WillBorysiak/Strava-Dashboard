import { ITotals } from "../../interfaces/stats/Totals.interface";
import { StatTotals } from "./StatTotals.model";

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
