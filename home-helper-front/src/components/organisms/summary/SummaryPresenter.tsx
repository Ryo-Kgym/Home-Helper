import { FC } from "react";
import { Tab, TabProps } from "@components/atoms/Tab";
import { RangeMonthPicker } from "@components/molecules/RangeMonthPicker";

type SummaryPresenterProps = {
  fromMonth: Date | null;
  setFromMonth: (fromMonth: Date | null) => void;
  toMonth: Date | null;
  setToMonth: (toMonth: Date | null) => void;
  defaultSelect: string;
  tabPropsList: TabProps[];
};

export const SummaryPresenter: FC<SummaryPresenterProps> = ({
  fromMonth,
  setFromMonth,
  toMonth,
  setToMonth,
  defaultSelect,
  tabPropsList,
}) => (
  <div>
    <RangeMonthPicker
      fromMonth={fromMonth}
      changeFromMonth={setFromMonth}
      toMonth={toMonth}
      changeToMonth={setToMonth}
    />
    <Tab defaultSelect={defaultSelect} tabPropsList={tabPropsList} />
  </div>
);
