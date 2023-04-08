import { DateInput } from "@mantine/dates";
import { FC } from "react";
import { MantineSize } from "@mantine/styles";

type DatePickerPresenterProps = {
  value: Date;
  onChange: (date: Date) => void;
  label: string;
  defaultValue: Date;
  placeholder: string;
  size: MantineSize;
  disabled: boolean;
  required: boolean;
  error: string;
};
export const DatePickerPresenter: FC<DatePickerPresenterProps> = ({
  value,
  onChange,
  label,
  defaultValue,
  placeholder,
  size,
  disabled,
  required,
  error,
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
    error={error}
    disabled={disabled}
  />
);
