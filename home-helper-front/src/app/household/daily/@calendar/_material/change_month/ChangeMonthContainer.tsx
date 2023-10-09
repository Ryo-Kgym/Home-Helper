/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { ChangeMonthPresenter } from "@app/household/daily/@calendar/_material/change_month/ChangeMonthPresenter";

type ChangeMonthContainerProps = {
  baseDate: Date;
  setBaseDate: (_: Date) => void;
};
export const ChangeMonthContainer = ({
  baseDate,
  setBaseDate,
}: ChangeMonthContainerProps) => {
  const displayDate =
    baseDate.getFullYear() + "年" + (baseDate.getMonth() + 1) + "月";

  const prevClickHandler = () => {
    setBaseDate(new Date(baseDate.getFullYear(), baseDate.getMonth() - 1, 1));
  };

  const nextClickHandler = () => {
    setBaseDate(new Date(baseDate.getFullYear(), baseDate.getMonth() + 1, 1));
  };

  return (
    <ChangeMonthPresenter
      displayYearMonth={displayDate}
      prevClickHandler={prevClickHandler}
      nextClickHandler={nextClickHandler}
    />
  );
};
