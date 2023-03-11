import { DateInput } from "@mantine/dates";
import { FC } from "react";
import { MantineSize } from "@mantine/styles";

type DatePickerPresenterProps = {
  value: Date;
  onChange: (date: Date) => void;
  label?: string;
  defaultValue?: Date;
  placeholder?: string;
  withAsterisk?: boolean;
  size?: MantineSize;
};
export const DatePickerPresenter: FC<DatePickerPresenterProps> = ({
  value,
  onChange,
  label = "DATE",
  defaultValue = new Date(),
  placeholder = "",
  withAsterisk = false,
  size = "lg",
}) => (
  <DateInput
    value={value}
    onChange={onChange}
    label={label}
    defaultValue={defaultValue}
    placeholder={placeholder}
    withAsterisk={withAsterisk}
    size={size}
    valueFormat="YYYY-MM-DD"
    monthLabelFormat={"YYYY-MM"}
    firstDayOfWeek={0}
    error={value === null ? "Required" : ""}
  />
);
