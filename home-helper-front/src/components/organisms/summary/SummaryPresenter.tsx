import { FC } from "react";
import { Tab, TabProps } from "@components/atoms/Tab";

type SummaryPresenterProps = {
  defaultSelect: string;
  tabPropsList: TabProps[];
};

export const SummaryPresenter: FC<SummaryPresenterProps> = ({
  defaultSelect,
  tabPropsList,
}) => (
  <div>
    <Tab defaultSelect={defaultSelect} tabPropsList={tabPropsList} />
  </div>
);
