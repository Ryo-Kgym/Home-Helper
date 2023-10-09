/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

"use client";

import { MonthlyCategoryContainer } from "@app/household/summary/_material/MonthlyCategoryContainer";
import { SummaryPresenter } from "@app/household/summary/_material/SummaryPresenter";
import { TabProps } from "@components/ui";
import { SummaryCategory } from "@app/household/summary/@summaryCategory/index";
import { useDate } from "@hooks/date/useDate";
import { useFetchSummaryCategoryAmount } from "@hooks/household/summary_category/useFetchSummaryCategoryAmount";
import { useState } from "react";

export const SummaryContainer = () => {
  const { offsetDate } = useDate();

  const thisYearFirstDay = offsetDate(new Date(new Date().getFullYear(), 0, 1));
  const thisYearLastDay = offsetDate(
    new Date(new Date().getFullYear(), 11, 31),
  );

  const [fromMonth, setFromMonth] = useState<Date | null>(thisYearFirstDay);
  const [toMonth, setToMonth] = useState<Date | null>(thisYearLastDay);

  const { data, incomeTotal, outcomeTotal } = useFetchSummaryCategoryAmount({
    fromMonth: fromMonth!,
    toMonth: toMonth!,
  });

  const createMonthNames = () => {
    let iterator = fromMonth;
    let prevYear = 0;
    let monthNames: string[] = [];
    while (iterator && iterator <= toMonth!) {
      let year = "";
      if (prevYear !== iterator.getFullYear()) {
        prevYear = iterator.getFullYear();
        year = `${iterator.getFullYear()}年`;
      }
      const month = iterator.toISOString().slice(5, 7);
      monthNames.push(`${year}${month}月`);
      iterator = offsetDate(
        new Date(iterator.getFullYear(), iterator.getMonth() + 1, 1),
      );
    }

    return monthNames;
  };

  const tabProps: TabProps[] = [
    {
      value: "monthlyCategory",
      label: "月次カテゴリ",
      contents: (
        <MonthlyCategoryContainer
          data={data}
          incomeTotal={incomeTotal}
          outcomeTotal={outcomeTotal}
          monthNames={createMonthNames()}
        />
      ),
    },
    {
      value: "setting",
      label: "設定",
      contents: <SummaryCategory />,
    },
  ];

  return (
    <SummaryPresenter
      fromMonth={fromMonth}
      setFromMonth={setFromMonth}
      toMonth={toMonth}
      setToMonth={setToMonth}
      defaultSelect="monthlyCategory"
      tabPropsList={tabProps}
    />
  );
};
