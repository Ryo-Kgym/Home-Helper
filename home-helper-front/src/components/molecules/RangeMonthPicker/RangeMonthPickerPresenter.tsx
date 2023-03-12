import { FC } from "react";
import { MonthPickerInput } from "@mantine/dates";

type RangeMonthPickerPresenterProps = {
  fromMonth: Date | null;
  changeFromMonth: (date: Date | null) => void;
  toMonth: Date | null;
  changeToMonth: (date: Date | null) => void;
};
export const RangeMonthPickerPresenter: FC<RangeMonthPickerPresenterProps> = ({
  fromMonth,
  changeFromMonth,
  toMonth,
  changeToMonth,
}) => (
  <div className={"justify-center"}>
    <MonthPickerInput
      type={"range"}
      value={[fromMonth, toMonth]}
      onChange={(range: [Date | null, Date | null]) => {
        changeFromMonth(range[0]);
        changeToMonth(range[1]);
      }}
      label={"MONTH"}
      valueFormat={"YYYY-MM"}
    />
  </div>
);
