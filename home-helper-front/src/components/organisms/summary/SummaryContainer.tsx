import { FC } from "react";
import { SummaryPresenter } from "@components/organisms/summary/SummaryPresenter";
import { TabProps } from "@components/atoms/Tab";
import { MonthlyCategory } from "@components/organisms/summary/monthly_category";
import { useFetchSummaryCategoryAmountByUser } from "@hooks/household/summary_category/useFetchSummaryCategoryAmountByUser";

type SummaryContainerProps = {};

export const SummaryContainer: FC<SummaryContainerProps> = () => {
  const { data } = useFetchSummaryCategoryAmountByUser({
    fromDate: new Date("2022-01-01"),
    toDate: new Date("2022-12-31"),
  });

  const tabProps: TabProps[] = [
    {
      value: "monthlyCategory",
      label: "月次カテゴリ",
      contents: <MonthlyCategory data={data} />,
    },
    {
      value: "monthlyCategoryChart",
      label: "チャート",
      contents: <div>chart</div>,
    },
  ];

  return (
    <SummaryPresenter defaultSelect="monthlyCategory" tabPropsList={tabProps} />
  );
};
