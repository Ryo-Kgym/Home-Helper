import { AccountPresenter } from "@components/organisms/account/AccountPresenter";
import { TableProps } from "@components/atoms/Table";
import { useState } from "react";
import { useGetAccountBalanceList } from "@hooks/household/account/useGetAccountBalanceList";
import { Button } from "@components/atoms/Button";
import { DailyTableByAccount } from "@components/organisms/daily_table/account";
import { CalendarContainer } from "@components/organisms/calendar/CalendarContainer";
import { Split } from "@components/atoms/Split";

export const AccountContainer = () => {
  const today = new Date();
  const [fromDate, setFromDate] = useState<Date | null>(null);
  const [toDate, setToDate] = useState<Date | null>(today);
  const [openDailyDetail, setOpenDailyDetail] = useState(false);
  const [selectedAccountId, setSelectedAccountId] = useState<string>("");

  const { data, total } = useGetAccountBalanceList(fromDate, toDate!);

  const tableProps: TableProps[] =
    data?.accountTotalList?.map((account) => {
      return {
        keyPrefix: "account",
        columns: [
          { value: account?.accountName, align: "left" },
          {
            value: Number(account?.total).toLocaleString(),
            align: "right",
          },
        ],
        onClick: () => {
          setSelectedAccountId(account?.accountId!);
          setOpenDailyDetail(true);
        },
      };
    }) ?? [];

  return (
    <Split
      size={40}
      first={
        <AccountPresenter
          fromDate={fromDate}
          changeFromDate={setFromDate}
          toDate={toDate}
          changeToDate={setToDate}
          tableProps={tableProps}
          total={total}
        />
      }
      second={
        <DailyTableByAccount
          fromDate={fromDate ?? new Date("2019-01-01")}
          toDate={toDate!}
          accountId={selectedAccountId}
        />
      }
    />
  );
};
