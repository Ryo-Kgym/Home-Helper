import { FC } from "react";
import { TabProps } from "@components/atoms/Tab";
import { TabNavigator } from "@components/atoms/TabNavigator";

type SelectMasterPresenterProps = {
  tabPropsList: TabProps[];
};
export const SelectMasterPresenter: FC<SelectMasterPresenterProps> = ({
  tabPropsList,
}) => (
  <div>
    <TabNavigator defaultSelect={"genre"} tabPropsList={tabPropsList} />
  </div>
);
