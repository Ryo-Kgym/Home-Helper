import { FC } from "react";
import { TabPresenter } from "@components/atoms/Tab/TabPresenter";
import { TabProps } from "@components/atoms/Tab/index";

type Props = {
  defaultSelect: string;
  tabPropsList: TabProps[];
};
export const TabContainer: FC<Props> = ({ defaultSelect, tabPropsList }) => {
  return (
    <TabPresenter defaultSelect={defaultSelect} tabPropsList={tabPropsList} />
  );
};
