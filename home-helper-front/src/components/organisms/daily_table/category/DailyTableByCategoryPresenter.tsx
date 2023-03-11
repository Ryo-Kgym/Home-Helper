import { FC } from "react";
import { TableProps } from "@components/atoms/Table";
import { DailyTableContainer } from "@components/organisms/daily_table/DailyTableContainer";

type DailyTableByCategoryPresenterProps = {
  tableProps: TableProps[];
};
export const DailyTableByCategoryPresenter: FC<
  DailyTableByCategoryPresenterProps
> = ({ tableProps }) => <DailyTableContainer dailyDetail={tableProps} />;
