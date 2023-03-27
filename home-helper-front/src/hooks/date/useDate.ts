import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

dayjs.extend(timezone);
dayjs.extend(utc);
dayjs.tz.setDefault("Asia/Tokyo");

export const useDate = () => {
  const now = dayjs().tz().format("YYYY-MM-DD HH:mm:ss.SSSSSS");

  const convert = (date: Date) => {
    return dayjs(date).tz().format("YYYY-MM-DD HH:mm:ss.SSSSSS");
  };

  return {
    now,
    convert,
  };
};
