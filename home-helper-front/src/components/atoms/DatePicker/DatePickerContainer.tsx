import { MantineSize } from "@mantine/styles";
import { FC } from "react";
import { useDate } from "@hooks/date/useDate";
import { DatePickerPresenter } from "@components/atoms/DatePicker/DatePickerPresenter";

type DatePickerContainerProps = {
  value: Date;
  onChange: (date: Date) => void;
  label?: string;
  defaultValue?: Date;
  placeholder?: string;
  size?: MantineSize;
  disabled?: boolean;
  required?: boolean;
};

export const DatePickerContainer: FC<DatePickerContainerProps> = ({
  value,
  onChange,
  label = "DATE",
  defaultValue = new Date(),
  placeholder = "",
  size = "lg",
  disabled = false,
  required = false,
}) => {
  const dateHook = useDate();

  const changeHandler = (date: Date) => {
    onChange(new Date(dateHook.convertToYmd(date)));
  };

  const error = required && value === null ? "Required" : "";

  return (
    <DatePickerPresenter
      value={value}
      onChange={changeHandler}
      label={label}
      defaultValue={defaultValue}
      placeholder={placeholder}
      size={size}
      disabled={disabled}
      required={required}
      error={error}
    />
  );
};
