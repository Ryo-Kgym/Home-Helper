import { FC, ReactNode } from "react";
import {
  TabNavigator,
  TabNavigatorProps,
} from "@components/atoms/TabNavigator";

type SelectMasterPresenterProps = {
  tabPropsList: TabNavigatorProps[];
  children: ReactNode;
};
export const SelectMasterPresenter: FC<SelectMasterPresenterProps> = ({
  tabPropsList,
  children,
}) => (
  <div>
    <TabNavigator
      defaultSelect={"genre"}
      tabPropsList={tabPropsList}
      children={children}
    />
  </div>
);
