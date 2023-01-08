import { FC } from "react";
import { TabPresenter } from "@components/ui/Tab/TabPresenter";
import { TabProps } from "@components/ui/Tab/index";

type Props = {
  defaultSelect: string;
  tabPropsList: TabProps[];
};
export const TabContainer: FC<Props> = ({ defaultSelect, tabPropsList }) => {
  return (
    <TabPresenter defaultSelect={defaultSelect} tabPropsList={tabPropsList} />
  );
};
