import { FC } from "react";
import { ChangeMonthPresenter } from "@components/organisms/calendar/change_month/ChangeMonthPresenter";

type ChangeMonthContainerProps = {
  date: Date;
};
export const ChangeMonthContainer: FC<ChangeMonthContainerProps> = ({
  date,
}) => {
  const displayDate = date.getFullYear() + "年" + (date.getMonth() + 1) + "月";

  return <ChangeMonthPresenter displayYearMonth={displayDate} />;
};
