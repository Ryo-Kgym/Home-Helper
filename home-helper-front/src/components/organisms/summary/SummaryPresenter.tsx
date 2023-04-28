import { FC } from "react";
import { Tab, TabProps } from "@components/atoms/Tab";
import { YearPicker } from "@components/atoms/YearPicker";

type SummaryPresenterProps = {
  year: Date | null;
  setYear: (year: Date | null) => void;
  defaultSelect: string;
  tabPropsList: TabProps[];
};

export const SummaryPresenter: FC<SummaryPresenterProps> = ({
  year,
  setYear,
  defaultSelect,
  tabPropsList,
}) => (
  <div>
    <YearPicker year={year} setYear={setYear} />
    <Tab defaultSelect={defaultSelect} tabPropsList={tabPropsList} />
  </div>
);
