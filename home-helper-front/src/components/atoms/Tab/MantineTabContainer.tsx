import { FC } from "react";
import { MantineTabPresenter } from "@components/atoms/Tab/MantineTabPresenter";
import { TabProps } from "@components/atoms/Tab/index";

type Props = {
  defaultSelect: string;
  tabPropsList: TabProps[];
};
export const MantineTabContainer: FC<Props> = ({
  defaultSelect,
  tabPropsList,
}) => {
  return (
    <MantineTabPresenter
      defaultSelect={defaultSelect}
      tabPropsList={tabPropsList}
    />
  );
};
