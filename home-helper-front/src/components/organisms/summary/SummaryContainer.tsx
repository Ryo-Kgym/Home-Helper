import { FC, useEffect, useState } from "react";
import { SummaryPresenter } from "@components/organisms/summary/SummaryPresenter";
import { TabProps } from "@components/atoms/Tab";
import { MonthlyCategory } from "@components/organisms/summary/monthly_category";
import { useFetchSummaryCategoryAmountByUser } from "@hooks/household/summary_category/useFetchSummaryCategoryAmountByUser";
import { useUser } from "@hooks/user/useUser";
import { SummaryCategory } from "@components/organisms/master/summary_category";
import { useDate } from "@hooks/date/useDate";

type SummaryContainerProps = {};

export const SummaryContainer: FC<SummaryContainerProps> = () => {
  const { offsetDate } = useDate();

  const [displayUserName, setDisplayUserName] = useState<string>("");

  const thisYearFirstDay = offsetDate(new Date(new Date().getFullYear(), 0, 1));
  const thisYearLastDay = offsetDate(
    new Date(new Date().getFullYear(), 11, 31)
  );

  const [fromMonth, setFromMonth] = useState<Date | null>(thisYearFirstDay);
  const [toMonth, setToMonth] = useState<Date | null>(thisYearLastDay);

  const { userName } = useUser();

  const { data, incomeTotal, outcomeTotal } =
    useFetchSummaryCategoryAmountByUser({
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
        new Date(iterator.getFullYear(), iterator.getMonth() + 1, 1)
      );
    }

    return monthNames;
  };

  const tabProps: TabProps[] = [
    {
      value: "monthlyCategory",
      label: `月次カテゴリ（${displayUserName}）`,
      contents: (
        <MonthlyCategory
          data={data}
          incomeTotal={incomeTotal}
          outcomeTotal={outcomeTotal}
          monthNames={createMonthNames()}
        />
      ),
    },
    {
      value: "monthlyCategoryAll",
      label: "月次カテゴリ（全体）",
      contents: <div>工事中</div>,
    },
    {
      value: "setting",
      label: "設定",
      contents: <SummaryCategory />,
    },
  ];

  useEffect(() => {
    setDisplayUserName(userName ?? "");
  }, [userName]);

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
