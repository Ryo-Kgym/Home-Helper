import type { FC } from "react";
import { Day } from "@components/organisms/calendar/day";

type CalendarPresenterProps = {};
export const CalendarPresenter: FC<CalendarPresenterProps> = () => {
  return (
    <div className={"w-full grid grid-cols-7 border-l-2"}>
      <Week />
      <Day date={new Date("2023-01-30")} />
      <Day date={new Date("2023-01-31")} />
      <Day date={new Date("2023-02-01")} />
      <Day date={new Date("2023-02-02")} />
      <Day date={new Date("2023-02-03")} />
      <Day date={new Date("2023-02-04")} />
      <Day date={new Date("2023-02-05")} />
      <Day date={new Date("2023-02-06")} />
      <Day date={new Date("2023-02-07")} />
      <Day date={new Date("2023-02-08")} />
      <Day date={new Date("2023-02-09")} />
      <Day date={new Date("2023-02-10")} />
      <Day date={new Date("2023-02-11")} />
      <Day date={new Date("2023-02-12")} />
      <Day date={new Date("2023-02-13")} />
      <Day date={new Date("2023-02-14")} />
      <Day date={new Date("2023-02-15")} />
      <Day date={new Date("2023-02-16")} />
      <Day date={new Date("2023-02-17")} />
      <Day date={new Date("2023-02-18")} />
      <Day date={new Date("2023-02-19")} />
      <Day date={new Date("2023-02-20")} />
      <Day date={new Date("2023-02-21")} />
      <Day date={new Date("2023-02-22")} />
      <Day date={new Date("2023-02-23")} />
      <Day date={new Date("2023-02-24")} />
      <Day date={new Date("2023-02-25")} />
      <Day date={new Date("2023-02-26")} />
      <Day date={new Date("2023-02-27")} />
      <Day date={new Date("2023-02-28")} />
      <Day date={new Date("2023-03-01")} />
      <Day date={new Date("2023-03-02")} />
      <Day date={new Date("2023-03-03")} />
    </div>
  );
};

const Week = () => (
  <>
    <div className={"p-2 border-r-2 border-b-2 border-t-2 text-red-600"}>
      日
    </div>
    <div className={"p-2 border-r-2 border-b-2 border-t-2"}>月</div>
    <div className={"p-2 border-r-2 border-b-2 border-t-2"}>火</div>
    <div className={"p-2 border-r-2 border-b-2 border-t-2"}>水</div>
    <div className={"p-2 border-r-2 border-b-2 border-t-2"}>木</div>
    <div className={"p-2 border-r-2 border-b-2 border-t-2"}>金</div>
    <div className={"p-2 border-r-2 border-b-2 border-t-2 text-blue-600"}>
      土
    </div>
  </>
);
