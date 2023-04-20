import { FC } from "react";
import { SelectMasterPresenter } from "@components/organisms/master/SelectMasterPresenter";
import { TabProps } from "@components/atoms/TabNavigator";
import { SummaryCategory } from "@components/organisms/master/summary_category";

export const SelectMasterContainer: FC = () => {
  const tabPropsList: TabProps[] = [
    {
      value: "genre",
      label: "ジャンル",
      contents: <></>,
    },
    {
      value: "category",
      label: "カテゴリ",
      contents: <></>,
    },
    {
      value: "account",
      label: "アカウント",
      contents: <></>,
    },
    {
      value: "summaryCategory",
      label: "サマリ",
      contents: <SummaryCategory />,
    },
  ];

  return <SelectMasterPresenter tabPropsList={tabPropsList} />;
};
