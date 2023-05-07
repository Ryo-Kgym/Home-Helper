import { FC } from "react";
import { Tab, TabProps } from "@components/atoms/Tab";
import { RangeMonthPicker } from "@components/molecules/RangeMonthPicker";

type SummaryPresenterProps = {
  fromMonth: Date | null;
  changeFromMonth: (fromMonth: Date | null) => void;
  toMonth: Date | null;
  changeToMonth: (toMonth: Date | null) => void;
  defaultSelect: string;
  tabPropsList: TabProps[];
};

export const SummaryPresenter: FC<SummaryPresenterProps> = ({
  fromMonth,
  changeFromMonth,
  toMonth,
  changeToMonth,
  defaultSelect,
  tabPropsList,
}) => (
  <div>
    <RangeMonthPicker
      fromMonth={fromMonth}
      changeFromMonth={changeFromMonth}
      toMonth={toMonth}
      changeToMonth={changeToMonth}
    />
    <Tab defaultSelect={defaultSelect} tabPropsList={tabPropsList} />
  </div>
);
