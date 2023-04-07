import { FC } from "react";
import { TableProps } from "@components/atoms/Table";
import { DailyTableByAccountPresenter } from "./DailyTableByAccountPresenter";
import { dailyDetailConverter } from "@components/organisms/daily_table/dailyDetailConverter";
import { useGetDailyDetailByDateAccountId } from "@hooks/household/daily_detail/useGetDailyDetailByDateAccountId";

type DailyTableByAccountContainerProps = {
  fromDate: Date;
  toDate: Date;
  accountId: string;
};
export const DailyTableByAccountContainer: FC<
  DailyTableByAccountContainerProps
> = ({ fromDate, toDate, accountId }) => {
  const { data, incomeTotal, outcomeTotal } = useGetDailyDetailByDateAccountId(
    accountId,
    fromDate,
    toDate
  );

  const tableProps: TableProps[] = dailyDetailConverter({ data });

  return (
    <DailyTableByAccountPresenter
      firstDay={fromDate}
      lastDay={toDate}
      tableProps={tableProps}
      incomeTotal={incomeTotal}
      outcomeTotal={outcomeTotal}
    />
  );
};
