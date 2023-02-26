import type { FC } from "react";
import { Day } from "@components/organisms/calendar/day";

type CalendarPresenterProps = {
  dateList: Date[];
};
export const CalendarPresenter: FC<CalendarPresenterProps> = ({ dateList }) => {
  return (
    <div className={"w-full grid grid-cols-7 border-l-2"}>
      <Week />
      {dateList.map((date) => (
        <Day date={date} />
      ))}
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
