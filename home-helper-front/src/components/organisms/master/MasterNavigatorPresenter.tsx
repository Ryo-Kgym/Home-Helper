import { FC, ReactNode } from "react";
import {
  TabNavigator,
  TabNavigatorProps,
} from "@components/atoms/TabNavigator";

type MasterNavigatorPresenterProps = {
  tabPropsList: TabNavigatorProps[];
  children: ReactNode;
  selectValue: string;
};
export const MasterNavigatorPresenter: FC<MasterNavigatorPresenterProps> = ({
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
