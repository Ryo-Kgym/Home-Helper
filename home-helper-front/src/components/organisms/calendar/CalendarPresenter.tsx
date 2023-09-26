import { Day } from "@components/organisms/calendar/day";
import { MonthPicker } from "@components/atoms/MonthPicker";
import { DailyTotal } from "@domain/model/household/DailyTotal";
import { DateSelectButton } from "@components/ui/date";

type CalendarPresenterProps = {
  baseDate: Date | null;
  setBaseDate: (_: Date | null) => void;
  dailyTotalList: DailyTotal[];
  refetch: () => void;
};
export const CalendarPresenter = ({
  baseDate,
  setBaseDate,
  dailyTotalList,
  refetch,
}: CalendarPresenterProps) => (
  <div className={"grid grid-cols-1 w-full"}>
    <div className={"grid grid-cols-6"}>
      <div className={"mx-auto"}>
        <DateSelectButton />
      </div>
      <div className={"col-span-4"}>
        <MonthPicker value={baseDate} setValue={setBaseDate} />
      </div>
      <div className={"mx-auto"}>
        <DateSelectButton type={"month"} />
      </div>
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
