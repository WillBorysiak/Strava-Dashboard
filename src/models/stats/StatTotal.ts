import {
  distanceConverter,
  elevationConverter,
  hoursMinsConverter,
} from "../../helpers/data/converters";

export class StatTotals {
  count: number;
  distance: string;
  movingTime: string;
  elevationGain: string;

  constructor(
    count: number,
    distance: number,
    movingTime: number,
    elevationGain: number,
  ) {
    this.count = count;
    this.distance = distanceConverter(distance, 2, "km");
    this.movingTime = hoursMinsConverter(movingTime, "h");
    this.elevationGain = elevationConverter(elevationGain, "m");
  }
}
