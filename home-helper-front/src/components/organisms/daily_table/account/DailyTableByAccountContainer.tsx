import { FC } from "react";
import { TableProps, tablePropsDateSorter } from "@components/atoms/Table";
import { DailyTableByAccountPresenter } from "./DailyTableByAccountPresenter";
import { dailyDetailConverter } from "@components/organisms/daily_table/dailyDetailConverter";
import { useGetDailyDetailByDateAccountId } from "@hooks/household/daily_detail/useGetDailyDetailByDateAccountId";
import { useGetCreditCardSummaryByAccountIdBetweenDate } from "@hooks/household/credit_card/useGetCreditCardSummaryByAccountIdBetweenDate";
import { creditCardSummaryConverter } from "@components/organisms/daily_table/creditCardSummaryConverter";

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

  const {
    data: creditCardSummaryData,
    incomeTotal: creditCardIncomeTotal,
    outcomeTotal: creditCardOutcomeTotal,
  } = useGetCreditCardSummaryByAccountIdBetweenDate(
    accountId,
    fromDate,
    toDate
  );

  const tableProps: TableProps[] = dailyDetailConverter({ data })
    .concat(creditCardSummaryConverter({ data: creditCardSummaryData }))
    .sort(tablePropsDateSorter);

  return (
    <DailyTableByAccountPresenter
      firstDay={fromDate}
      lastDay={toDate}
      tableProps={tableProps}
      incomeTotal={(incomeTotal ?? 0) + creditCardIncomeTotal}
      outcomeTotal={(outcomeTotal ?? 0) + (creditCardOutcomeTotal ?? 0)}
    />
  );
};
