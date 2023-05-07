import { FC } from "react";
import { MonthPickerInput } from "@mantine/dates";

type MonthPickerPresenterProps = {
  value: Date | null;
  setValue: (value: Date | null) => void;
  label: string;
  clearable: boolean;
};
export const MonthPickerPresenter: FC<MonthPickerPresenterProps> = ({
  value,
  setValue,
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
    onChange={setValue}
    size={"lg"}
    clearable={clearable}
  />
);
