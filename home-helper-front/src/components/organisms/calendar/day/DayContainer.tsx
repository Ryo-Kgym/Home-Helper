import { FC, useState } from "react";
import { DayPresenter } from "./DayPresenter";
import { useGetAmountByDay } from "@hooks/household/iocome/useGetAmountByDay";

type DayContainerProps = {
  date: Date;
  baseDate: Date;
};
export const DayContainer: FC<DayContainerProps> = ({ date, baseDate }) => {
  const [opened, setOpened] = useState(false);
  const today = new Date();

  const displayDate =
    date.getDate() === 1
      ? date.getMonth() + 1 + "/" + date.getDate()
      : date.getDate().toLocaleString();

  const { income, outcome } = useGetAmountByDay(date);

  const isToday = date.toDateString() === today.toDateString();
  const isNotThisMonth = date.getMonth() !== baseDate.getMonth();

  return (
    <DayPresenter
      displayDay={displayDate}
      income={income}
      outcome={outcome}
      isToday={isToday}
      isNotThisMonth={isNotThisMonth}
      opened={opened}
      onClose={() => setOpened(false)}
      openClickHandler={() => setOpened(true)}
    />
  );
};
