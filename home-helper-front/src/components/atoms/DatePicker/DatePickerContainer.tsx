/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { MantineSize } from "@mantine/core";
import { DatePickerPresenter } from "@components/atoms/DatePicker/DatePickerPresenter";

type DatePickerContainerProps = {
  value: Date;
  onChange: (_: Date) => void;
  label?: string;
  defaultValue?: Date;
  placeholder?: string;
  size?: MantineSize;
  disabled?: boolean;
  required?: boolean;
};

export const DatePickerContainer = ({
  value,
  onChange,
  label = "DATE",
  defaultValue = new Date(),
  placeholder = "",
  size = "lg",
  disabled = false,
  required = false,
}: DatePickerContainerProps) => {
  const error = required && value === null ? "Required" : "";

  return (
    <DatePickerPresenter
      value={new Date(value)}
      onChange={onChange}
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
