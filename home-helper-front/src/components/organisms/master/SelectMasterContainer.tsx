import { FC, ReactNode } from "react";
import { SelectMasterPresenter } from "@components/organisms/master/SelectMasterPresenter";
import { TabNavigatorProps } from "@components/atoms/TabNavigator";

type SelectMasterContainerProps = {
  children: ReactNode;
};

export const SelectMasterContainer: FC<SelectMasterContainerProps> = ({
  children,
}) => {
  const tabPropsList: TabNavigatorProps[] = [
    {
      value: "genre",
      label: "ジャンル",
      url: "/household/master/genre",
    },
    {
      value: "category",
      label: "カテゴリ",
      url: "/household/master/category",
    },
    {
      value: "account",
      label: "アカウント",
      url: "/household/master/account",
    },
    {
      value: "summaryCategory",
      label: "サマリ",
      url: "/household/master/summaryCategory",
    },
  ];

  return (
    <SelectMasterPresenter tabPropsList={tabPropsList} children={children} />
  );
};
