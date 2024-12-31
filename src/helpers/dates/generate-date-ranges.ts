import dayjs from "dayjs";
import weekOfYear from "dayjs/plugin/weekOfYear";

dayjs.extend(weekOfYear);
dayjs.Ls.en.weekStart = 1;

export const generateWeek = (date: string): number => {
  return dayjs(date).week();
};

export const generateMonth = (date: string): number => {
  return dayjs(date).month() + 1;
};

export const generateYear = (date: string): number => {
  return dayjs(date).year();
};
