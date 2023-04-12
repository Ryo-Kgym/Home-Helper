import { FC } from "react";
import { Tab, TabProps } from "@components/atoms/Tab";

type SelectMasterPresenterProps = {
  tabPropsList: TabProps[];
};
export const SelectMasterPresenter: FC<SelectMasterPresenterProps> = ({
  tabPropsList,
}) => (
  <div>
    <Tab defaultSelect={"genre"} tabPropsList={tabPropsList} />
  </div>
);
