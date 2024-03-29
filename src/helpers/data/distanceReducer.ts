import { distanceConverter } from "./converters";

export const distanceReducer = (array: number[]) => {
  if (!array) return 0;

  let distanceRawTotal = array.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue;
  }, 0);

  let distanceKm = distanceConverter(distanceRawTotal, 2);

  return Number(distanceKm);
};
