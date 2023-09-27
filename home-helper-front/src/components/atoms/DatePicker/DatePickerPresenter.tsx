/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { DateInput } from "@mantine/dates";
import { MantineSize } from "@mantine/core";

type DatePickerPresenterProps = {
  value: Date;
  onChange: (_: Date) => void;
  label: string;
  defaultValue: Date;
  placeholder: string;
  size: MantineSize;
  disabled: boolean;
  required: boolean;
  error: string;
};
export const DatePickerPresenter = ({
  value,
  onChange,
  label,
  defaultValue,
  placeholder,
  size,
  disabled,
  required,
  error,
}: DatePickerPresenterProps) => (
  <>
    <DateInput
      className={"sm:hidden"}
      value={value}
      onChange={onChange}
      label={label}
      defaultValue={defaultValue}
      placeholder={placeholder}
      withAsterisk={required}
      size={"xs"}
      valueFormat="YYYY-MM-DD"
      monthLabelFormat={"YYYY-MM"}
      monthsListFormat={"MM"}
      firstDayOfWeek={0}
      error={error}
      disabled={disabled}
    />
    <DateInput
      className={"max-sm:hidden"}
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
  </>
);
