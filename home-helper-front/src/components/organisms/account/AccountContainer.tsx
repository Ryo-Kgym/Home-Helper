"use client";

import { AccountPresenter } from "@components/organisms/account/AccountPresenter";
import { TableProps } from "@components/atoms/Table";
import { useState } from "react";
import { useGetAccountBalanceList } from "@hooks/household/account/useGetAccountBalanceList";
import { DailyTableByAccount } from "@components/organisms/daily_table/account";
import { ResponsiveSwitcher } from "@components/page/ResponsiveSwitcher";

export const AccountContainer = () => {
  const today = new Date();
  const [fromDate, setFromDate] = useState<Date | null>(null);
  const [toDate, setToDate] = useState<Date | null>(today);
  const [selectedAccountId, setSelectedAccountId] = useState<string>("");

  const { data, total } = useGetAccountBalanceList(fromDate, toDate!);

  const tableProps: TableProps[] =
    data?.accountTotal?.map((account) => {
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
        },
      };
    }) ?? [];

  return (
    <ResponsiveSwitcher
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
