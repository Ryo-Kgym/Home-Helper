import React, { FC } from "react";
import { DayPresenter } from "./DayPresenter";

type DayContainerProps = {
  date: Date;
};
export const DayContainer: FC<DayContainerProps> = ({ date }) => {
  const displayDate =
    date.getDate() === 1
      ? date.getMonth() + 1 + "/" + date.getDate()
      : date.getDate().toLocaleString();

  return <DayPresenter displayDay={displayDate} />;
};
