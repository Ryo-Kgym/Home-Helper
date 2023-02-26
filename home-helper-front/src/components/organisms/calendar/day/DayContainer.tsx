import React, { FC } from "react";
import { DayPresenter } from "./DayPresenter";
import { useGetAmountByDay } from "@hooks/household/iocome/useGetAmountByDay";

type DayContainerProps = {
  date: Date;
};
export const DayContainer: FC<DayContainerProps> = ({ date }) => {
  const today = new Date();

  const displayDate =
    date.getDate() === 1
      ? date.getMonth() + 1 + "/" + date.getDate()
      : date.getDate().toLocaleString();

  const { income, outcome } = useGetAmountByDay(date);

  const isToday = date.toDateString() === today.toDateString();
  const isNotThisMonth = date.getMonth() !== today.getMonth();

  return (
    <DayPresenter
      displayDay={displayDate}
      income={income}
      outcome={outcome}
      isToday={isToday}
      isNotThisMonth={isNotThisMonth}
    />
  );
};
