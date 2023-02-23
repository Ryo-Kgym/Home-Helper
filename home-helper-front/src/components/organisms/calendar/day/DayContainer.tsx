import React, { FC } from "react";
import { DayPresenter } from "./DayPresenter";

type DayContainerProps = {
  date: Date;
};
export const DayContainer: FC<DayContainerProps> = ({ date }) => {
  return <DayPresenter day={date.getDate().toLocaleString()} />;
};
