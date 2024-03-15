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
  let distanceInKm = value / 1000;
  let distanceToDecimal = distanceInKm.toFixed(decimalPlace);

  if (suffix) {
    return distanceToDecimal + suffix;
  } else {
    return distanceToDecimal;
  }
};

// speed

export const speedConverter = (value: number, suffix?: string) => {
  const speedKmph = value * 3.6;
  const speed = speedKmph.toFixed(1);

  if (suffix) {
    return speed + suffix;
  } else {
    return speed;
  }
};

// elevation

export const elevationConverter = (value: number, suffix?: string) => {
  const formattedValue = value.toFixed(0);

  if (suffix) {
    return formattedValue + suffix;
  } else {
    return formattedValue;
  }
};

// heartRate

export const heartRateConverter = (value: number, suffix?: string) => {
  const heartRate = value.toFixed(0);

  if (suffix) {
    return heartRate + suffix;
  } else {
    return heartRate;
  }
};

// secondsMins

export const secondsMinsConverter = (value: number) => {
  let minutes = Math.floor(value / 60);
  let seconds = value - minutes * 60;

  const time = `${minutes}m ${seconds}s`;

  return time;
};

// hoursMins

export const hoursMinsConverter = (value: number, suffix?: string) => {
  let hours = Math.floor(value / 3600);
  let minutes = Math.floor((value - hours * 3600) / 60);

  if (hours < 10) {
    hours = 0 + hours;
  }
  if (minutes < 10) {
    minutes = 0 + minutes;
  }

  const time = `${hours}:${minutes}`;

  if (suffix) {
    return time + suffix;
  } else {
    return time;
  }
};
