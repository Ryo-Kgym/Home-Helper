import { FC } from "react";
import { MonthPickerInput } from "@mantine/dates";

type MonthPickerPresenterProps = {
  value: Date | null;
  changeValue: (value: Date | null) => void;
  label?: string;
};
export const MonthPickerPresenter: FC<MonthPickerPresenterProps> = ({
  value,
  changeValue,
  label = "YEAR MONTH",
}) => {
  return (
    <MonthPickerInput
      label={label}
      placeholder="YYYY-MM"
      valueFormat={"YYYY-MM"}
      yearLabelFormat={"YYYY"}
      monthsListFormat={"MM"}
      value={value}
      onChange={changeValue}
      size={"lg"}
    />
  );
};
