import { FC } from "react";
import { TableProps } from "@components/atoms/Table";
import { DailyTable } from "@components/organisms/daily_table/DailyTable";

type DailyTableByCategoryPresenterProps = {
  tableProps: TableProps[];
  incomeTotal: number | undefined;
  outcomeTotal: number | undefined;
};
export const DailyTableByAccountPresenter: FC<
  DailyTableByCategoryPresenterProps
> = ({ tableProps, incomeTotal, outcomeTotal }) => {
  return (
    <div>
      <DailyTable
        tablePropsList={tableProps}
        incomeTotal={incomeTotal}
        outcomeTotal={outcomeTotal}
      />
    </div>
  );
};
