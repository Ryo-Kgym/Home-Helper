import { FC } from "react";
import { SummaryPresenter } from "@components/organisms/summary/SummaryPresenter";
import { TabProps } from "@components/atoms/Tab";
import { MonthlyCategory } from "@components/organisms/summary/monthly_category";

type SummaryContainerProps = {};

export const SummaryContainer: FC<SummaryContainerProps> = () => {
  const tabProps: TabProps[] = [
    {
      value: "monthlyCategory",
      label: "月次カテゴリ",
      contents: <MonthlyCategory />,
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
