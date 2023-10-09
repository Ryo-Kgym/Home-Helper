/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

"use client";

import { AccountPresenter } from "@app/household/account/_material/AccountPresenter";
import { TableProps } from "@components/atoms/Table/index";
import { useState } from "react";
import { useGetAccountBalanceList } from "@hooks/household/account/useGetAccountBalanceList";
import { DailyTableByAccount } from "@components/organisms/daily_table/account/index";
import { ResponsiveSwitcher } from "@app/household/_layout/ResponsiveSwitcher";

export const AccountContainer = () => {
  const [fromDate, setFromDate] = useState<Date | null>(new Date("2019-01-01"));
  const [toDate, setToDate] = useState<Date | null>(new Date());
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
