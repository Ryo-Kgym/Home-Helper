import { FC } from "react";
import { SelectMasterPresenter } from "@components/organisms/master/SelectMasterPresenter";
import { TabProps } from "@components/atoms/Tab";

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
      value: "salary",
      label: "給与",
      contents: <></>,
    },
  ];

  return <SelectMasterPresenter tabPropsList={tabPropsList} />;
};
