import type { FC } from "react";
import { Day } from "@components/organisms/calendar/day";
import { MonthPicker } from "@components/atoms/MonthPicker";
import { DailyTotal } from "@domain/model/household/DailyTotal";

type CalendarPresenterProps = {
  baseDate: Date | null;
  setBaseDate: (date: Date | null) => void;
  dailyTotalList: DailyTotal[];
  refetch: () => void;
};
export const CalendarPresenter: FC<CalendarPresenterProps> = ({
  baseDate,
  setBaseDate,
  dailyTotalList,
  refetch,
}) => {
  return (
    <div className={"grid grid-cols-1 w-full"}>
      <div className={"justify-center"}>
        <MonthPicker value={baseDate} changeValue={setBaseDate} />
      </div>

      <div className={"w-full grid grid-cols-7 border-l-2"}>
        <Week />
        {dailyTotalList.map((e, index) => (
          <Day
            key={`day${index}`}
            baseDate={baseDate!}
            date={e.date}
            income={e.incomeTotal}
            outcome={e.outcomeTotal}
            refetch={refetch}
          />
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
