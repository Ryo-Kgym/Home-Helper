import React, { FC } from "react";
import { DayPresenter } from "./DayPresenter";
import { useGetAmountByDay } from "@hooks/household/iocome/useGetAmountByDay";

type DayContainerProps = {
  date: Date;
};
export const DayContainer: FC<DayContainerProps> = ({ date }) => {
  const displayDate =
    date.getDate() === 1
      ? date.getMonth() + 1 + "/" + date.getDate()
      : date.getDate().toLocaleString();

  const { income, outcome } = useGetAmountByDay(date);

  return (
    <DayPresenter displayDay={displayDate} income={income} outcome={outcome} />
  );
};
