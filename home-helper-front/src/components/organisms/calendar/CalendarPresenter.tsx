import type { FC } from "react";
import { Day } from "@components/organisms/calendar/day";
import { ChangeMonth } from "@components/organisms/calendar/change_month";

type CalendarPresenterProps = {
  dateList: Date[];
};
export const CalendarPresenter: FC<CalendarPresenterProps> = ({ dateList }) => {
  return (
    <div className={"grid grid-cols-1 w-full"}>
      <div className={"justify-center"}>
        <ChangeMonth date={new Date()} />
      </div>

      <div className={"w-full grid grid-cols-7 border-l-2"}>
        <Week />
        {dateList.map((date, index) => (
          <Day key={`day${index}`} date={date} />
        ))}
      </div>
    </div>
  );
};

const Week = () => {
  const baseStyle = "p-2 border-r-2 border-b-2 border-t-2";

  return (
    <>
      <div className={baseStyle + " text-red-600"}>日</div>
      <div className={baseStyle}>月</div>
      <div className={baseStyle}>火</div>
      <div className={baseStyle}>水</div>
      <div className={baseStyle}>木</div>
      <div className={baseStyle}>金</div>
      <div className={baseStyle + " text-blue-600"}>土</div>
    </>
  );
};
