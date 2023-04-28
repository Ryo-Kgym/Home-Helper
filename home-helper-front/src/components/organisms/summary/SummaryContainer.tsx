import { FC, useState } from "react";
import { SummaryPresenter } from "@components/organisms/summary/SummaryPresenter";
import { TabProps } from "@components/atoms/Tab";
import { MonthlyCategory } from "@components/organisms/summary/monthly_category";
import { useFetchSummaryCategoryAmountByUser } from "@hooks/household/summary_category/useFetchSummaryCategoryAmountByUser";
import { useUser } from "@hooks/user/useUser";

type SummaryContainerProps = {};

export const SummaryContainer: FC<SummaryContainerProps> = () => {
  const [year, setYear] = useState<Date | null>(new Date());
  const { userName } = useUser();

  const { data } = useFetchSummaryCategoryAmountByUser({
    year: year?.getFullYear() ?? new Date().getFullYear(),
  });

  const tabProps: TabProps[] = [
    {
      value: "monthlyCategory",
      label: `月次カテゴリ（${userName}）`,
      contents: <MonthlyCategory data={data} />,
    },
    {
      value: "monthlyCategoryAll",
      label: "月次カテゴリ（全体）",
      contents: <div>工事中</div>,
    },
  ];

  return (
    <SummaryPresenter
      year={year}
      setYear={setYear}
      defaultSelect="monthlyCategory"
      tabPropsList={tabProps}
    />
  );
};
