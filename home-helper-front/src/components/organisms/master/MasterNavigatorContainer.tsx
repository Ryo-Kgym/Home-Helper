import { FC, ReactNode } from "react";
import { MasterNavigatorPresenter } from "@components/organisms/master/MasterNavigatorPresenter";
import { TabNavigatorProps } from "@components/atoms/TabNavigator";

type MasterNavigatorContainerProps = {
  children: ReactNode;
  selectValue: string;
};

export const MasterNavigatorContainer: FC<MasterNavigatorContainerProps> = ({
  children,
  selectValue,
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
    <MasterNavigatorPresenter
      selectValue={selectValue}
      tabPropsList={tabPropsList}
    >
      {children}
    </MasterNavigatorPresenter>
  );
};
