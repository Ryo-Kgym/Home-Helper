/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { MantineSize } from "@mantine/core";
import { DateInput } from "@mantine/dates";
export const MantineDatePicker = ({
  value,
  onChange,
  label = "DATE",
  defaultValue = new Date(),
  placeholder = "",
  size = "lg",
  disabled = false,
  required = false,
}: {
  value: Date;
  onChange: (_: Date) => void;
  label?: string;
  defaultValue?: Date;
  placeholder?: string;
  size?: MantineSize;
  disabled?: boolean;
  required?: boolean;
}) => {
  const error = required && value === null ? "Required" : "";

  return (
    <DateInput
      value={new Date(value)}
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
};
