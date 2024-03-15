import { ITotals } from "../../interfaces/stats/ITotals";
import { StatTotals } from "./StatTotal";

export class Stats {
  runningTotals: StatTotals;

  constructor(runningTotals: ITotals) {
    this.runningTotals = this.createModelFromInterface(runningTotals);
  }

  private createModelFromInterface(totals: ITotals): StatTotals {
    return new StatTotals(
      totals.count,
      totals.distance,
      totals.moving_time,
      totals.elevation_gain,
    );
  }
}
