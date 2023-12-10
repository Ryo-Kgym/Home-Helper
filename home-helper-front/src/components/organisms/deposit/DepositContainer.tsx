/*
 * Copyright (c) 2023 Ryo-Kgym.
 */
"use client";

import { DepositPresenter } from "./DepositPresenter";
import { useGetMonthlyDeposit } from "@hooks/household/deposit/useGetMonthlyDeposit";
import { createMonthNames } from "@function/date/create-month-names";
import { TableProps } from "@components/atoms/Table";

export const DepositContainer = () => {
  const thisYear = new Date().getFullYear();
  const fromDate = new Date(thisYear, 0, 1);
  const toDate = new Date(thisYear, 11, 31);

  const { monthlyDeposits, loading, error } = useGetMonthlyDeposit({
    fromDate,
    toDate,
  });

  let tablePropsList: TableProps[] = [];

  if (loading) return <div>loading...</div>;

  const header: string[] = ["カテゴリ", ...createMonthNames(fromDate, toDate)];

  tablePropsList = monthlyDeposits.map((md) => ({
    keyPrefix: md.categoryId,
    columns: [
      { value: md.categoryName, align: "left" },
      ...md.monthlyCategory.map((mc) => ({
        value: mc.amount.toLocaleString(),
        align: "right",
      })),
    ],
  })) as TableProps[];

  return <DepositPresenter header={header} tablePropsList={tablePropsList} />;
};
