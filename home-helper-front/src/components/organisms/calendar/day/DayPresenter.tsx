import { FC } from "react";
import { Modal } from "@components/atoms/Modal";
import { RegisterDailyDetail } from "@components/organisms/register_daily_detail";

type DayPresenterProps = {
  date: Date;
  displayDay: string;
  income: number | undefined;
  outcome: number | undefined;
  isToday: boolean;
  isNotThisMonth: boolean;
  opened: boolean;
  onClose: () => void;
  openClickHandler: () => void;
};
export const DayPresenter: FC<DayPresenterProps> = ({
  date,
  displayDay,
  income,
  outcome,
  isToday,
  isNotThisMonth,
  opened,
  onClose,
  openClickHandler,
}) => (
  <>
    <div
      className={`h-32 border-r-2 border-b-2 
      ${isToday && "bg-amber-100"} ${isNotThisMonth && "bg-gray-300"}`}
      onClick={openClickHandler}
    >
      <div className={"p-2"}>{displayDay}</div>

      <div className={"grid grid-cols-1"}>
        <Line price={income} backgroundColor={`${income && "bg-green-300"} `} />
        <Line price={outcome} backgroundColor={`${outcome && "bg-red-300"} `} />
        {income && outcome && (
          <Line price={income - outcome} backgroundColor={"bg-yellow-300"} />
        )}
      </div>
    </div>
    <Modal opened={opened} onClose={onClose}>
      <RegisterDailyDetail date={date} />
    </Modal>
  </>
);

const Line = ({
  price,
  backgroundColor = "bg-inherit",
}: {
  price?: number;
  backgroundColor?: string;
}) => {
  return (
    <div
      className={`m-0.5 pr-1 rounded-md ${backgroundColor} text-right h-[1.5em]`}
    >
      {price?.toLocaleString() ?? ""}
    </div>
  );
};
