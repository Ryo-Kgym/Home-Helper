import { FC } from "react";
import { TableProps } from "@components/atoms/Table";
import { DailyTableContainer } from "@components/organisms/daily_table/DailyTableContainer";

type DailyTableByCategoryPresenterProps = {
  firstDay: Date;
  lastDay: Date;
  tableProps: TableProps[];
};
export const DailyTableByCategoryPresenter: FC<
  DailyTableByCategoryPresenterProps
> = ({ firstDay, lastDay, tableProps }) => {
  return (
    <DailyTableContainer
      dailyDetail={tableProps}
      defaultFromDate={firstDay}
      defaultToDate={lastDay}
    />
  );
};
