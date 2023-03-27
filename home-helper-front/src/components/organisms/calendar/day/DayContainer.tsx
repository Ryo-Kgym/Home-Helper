import { FC, useState } from "react";
import { DayPresenter } from "./DayPresenter";

type DayContainerProps = {
  date: Date;
  baseDate: Date;
  income: number | undefined;
  outcome: number | undefined;
  refetch: () => void;
};
export const DayContainer: FC<DayContainerProps> = ({
  date,
  baseDate,
  income,
  outcome,
  refetch,
}) => {
  const [opened, setOpened] = useState(false);
  const today = new Date();

  const displayDate =
    date.getDate() === 1
      ? date.getMonth() + 1 + "/" + date.getDate()
      : date.getDate().toLocaleString();

  const isToday = date.toDateString() === today.toDateString();
  const isNotThisMonth = date.getMonth() !== baseDate.getMonth();

  const closeHandler = () => {
    setOpened(false);
    refetch();
  };

  return (
    <DayPresenter
      date={date}
      displayDay={displayDate}
      income={income}
      outcome={outcome}
      isToday={isToday}
      isNotThisMonth={isNotThisMonth}
      opened={opened}
      onClose={closeHandler}
      openClickHandler={() => setOpened(true)}
    />
  );
};
