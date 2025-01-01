// date

import dayjs from "dayjs";

export const dateConverter = (value: string) => {
  const date = dayjs(value).format("ddd DD MMM YYYY");

  return date;
};

// distance

export const distanceConverter = (
  value: number,
  decimalPlace: number,
  suffix?: string,
) => {
  const distanceInKm: number = value / 1000;
  const distanceToDecimal: string = distanceInKm.toFixed(decimalPlace);

  if (suffix) {
    return distanceToDecimal + suffix;
  } else {
    return distanceToDecimal;
  }
};

// speed

export const speedConverter = (value: number, suffix?: string) => {
  const speedKmph: number = value * 3.6;
  const speed: string = speedKmph.toFixed(1);

  if (suffix) {
    return speed + suffix;
  } else {
    return speed;
  }
};

// elevation

export const elevationConverter = (value: number, suffix?: string) => {
  const elevation: string = value.toFixed(0);

  if (suffix) {
    return elevation + suffix;
  } else {
    return elevation;
  }
};

// heart rate

export const heartRateConverter = (value: number, suffix?: string) => {
  const heartRate: string = value.toFixed(0);

  if (suffix) {
    return heartRate + suffix;
  } else {
    return heartRate;
  }
};

// seconds mins

export const secondsMinsConverter = (value: number) => {
  const minutes: number = Math.floor(value / 60);
  const seconds: number = value - minutes * 60;

  const time: string = `${minutes}m ${seconds}s`;

  return time;
};

// hours mins

export const hoursMinsConverter = (value: number, suffix?: string) => {
  let hours: number = Math.floor(value / 3600);
  let minutes: number = Math.floor((value - hours * 3600) / 60);

  if (hours < 10) {
    hours = 0 + hours;
  }
  if (minutes < 10) {
    minutes = 0 + minutes;
  }

  const time: string = `${hours}:${minutes}`;

  if (suffix) {
    return time + suffix;
  } else {
    return time;
  }
};
