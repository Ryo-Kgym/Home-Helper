import { FC, ReactNode } from "react";
import {
  TabNavigator,
  TabNavigatorProps,
} from "@components/atoms/TabNavigator";

type SelectMasterPresenterProps = {
  tabPropsList: TabNavigatorProps[];
  children: ReactNode;
  selectValue: string;
};
export const SelectMasterPresenter: FC<SelectMasterPresenterProps> = ({
  tabPropsList,
  children,
  selectValue,
}) => (
  <div>
    <TabNavigator selectValue={selectValue} tabPropsList={tabPropsList}>
      {children}
    </TabNavigator>
  </div>
);
