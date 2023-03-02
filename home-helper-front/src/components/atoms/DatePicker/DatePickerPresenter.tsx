import { DatePicker } from "@mantine/dates";
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
  <DatePicker
    value={value}
    onChange={onChange}
    label={label}
    defaultValue={defaultValue}
    placeholder={placeholder}
    withAsterisk={withAsterisk}
    size={size}
    inputFormat="YYYY-MM-DD"
    labelFormat="YYYY-MM"
    firstDayOfWeek="sunday"
    error={value === null ? "Required" : ""}
  />
);
