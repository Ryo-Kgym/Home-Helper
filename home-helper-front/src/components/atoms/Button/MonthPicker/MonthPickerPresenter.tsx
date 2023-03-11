import { FC } from "react";
import { MonthPickerInput } from "@mantine/dates";

type MonthPickerPresenterProps = {
  value: Date | null;
  changeValue: (value: Date | null) => void;
};
export const MonthPickerPresenter: FC<MonthPickerPresenterProps> = ({
  value,
  changeValue,
}) => {
  return (
    <MonthPickerInput
      label="YEAR MONTH"
      placeholder="YYYY-MM"
      value={value}
      onChange={changeValue}
      mx="auto"
      maw={400}
    />
  );
};
