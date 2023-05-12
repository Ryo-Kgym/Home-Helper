import { FC } from "react";
import { MonthPickerInput } from "@mantine/dates";

type MonthPickerPresenterProps = {
  value: Date | null;
  onChange: (value: Date | null) => void;
  label: string;
  clearable: boolean;
};
export const MonthPickerPresenter: FC<MonthPickerPresenterProps> = ({
  value,
  onChange,
  label,
  clearable,
}) => (
  <MonthPickerInput
    label={label}
    placeholder="YYYY-MM"
    valueFormat={"YYYY-MM"}
    yearLabelFormat={"YYYY"}
    monthsListFormat={"MM"}
    value={value}
    onChange={onChange}
    size={"lg"}
    clearable={clearable}
  />
);
