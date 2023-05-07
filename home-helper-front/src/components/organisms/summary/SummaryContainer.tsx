import { FC, useEffect, useState } from "react";
import { SummaryPresenter } from "@components/organisms/summary/SummaryPresenter";
import { TabProps } from "@components/atoms/Tab";
import { MonthlyCategory } from "@components/organisms/summary/monthly_category";
import { useFetchSummaryCategoryAmountByUser } from "@hooks/household/summary_category/useFetchSummaryCategoryAmountByUser";
import { useUser } from "@hooks/user/useUser";
import { SummaryCategory } from "@components/organisms/master/summary_category";

type SummaryContainerProps = {};

export const SummaryContainer: FC<SummaryContainerProps> = () => {
  const [year, setYear] = useState<Date | null>(new Date());
  const [displayUserName, setDisplayUserName] = useState<string>("");

  const { userName } = useUser();

  const { data } = useFetchSummaryCategoryAmountByUser({
    year: year?.getFullYear() ?? new Date().getFullYear(),
  });

  const tabProps: TabProps[] = [
    {
      value: "monthlyCategory",
      label: `月次カテゴリ（${displayUserName}）`,
      contents: <MonthlyCategory data={data} />,
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
    setDisplayUserName(userName);
  }, []);

  return (
    <SummaryPresenter
      year={year}
      setYear={setYear}
      defaultSelect="monthlyCategory"
      tabPropsList={tabProps}
    />
  );
};
