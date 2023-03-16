import { DateInput } from "@mantine/dates";
import { FC } from "react";
import { MantineSize } from "@mantine/styles";

type DatePickerPresenterProps = {
  value: Date;
  onChange: (date: Date) => void;
  label?: string;
  defaultValue?: Date;
  placeholder?: string;
  size?: MantineSize;
  disabled?: boolean;
  required?: boolean;
};
export const DatePickerPresenter: FC<DatePickerPresenterProps> = ({
  value,
  onChange,
  label = "DATE",
  defaultValue = new Date(),
  placeholder = "",
  size = "lg",
  disabled = false,
  required = false,
}) => (
  <DateInput
    value={value}
    onChange={onChange}
    label={label}
    defaultValue={defaultValue}
    placeholder={placeholder}
    withAsterisk={required}
    size={size}
    valueFormat="YYYY-MM-DD"
    monthLabelFormat={"YYYY-MM"}
    monthsListFormat={"MM"}
    firstDayOfWeek={0}
    error={required && value === null ? "Required" : ""}
    disabled={disabled}
  />
);
