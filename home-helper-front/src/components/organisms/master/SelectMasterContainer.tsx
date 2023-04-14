import { FC } from "react";
import { SelectMasterPresenter } from "@components/organisms/master/SelectMasterPresenter";
import { TabProps } from "@components/atoms/Tab";
import { YearlySummaryCategory } from "@components/organisms/master/yearlySummaryCategory";

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
      value: "yearlySummaryCategory",
      label: "年間サマリ",
      contents: <YearlySummaryCategory />,
    },
  ];

  return <SelectMasterPresenter tabPropsList={tabPropsList} />;
};
