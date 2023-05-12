import { FC } from "react";
import { MonthPickerPresenter } from "@components/atoms/MonthPicker/MonthPickerPresenter";
import { useDate } from "@hooks/date/useDate";

type MonthPickerContainerProps = {
  value: Date | null;
  setValue: (value: Date | null) => void;
  label?: string;
  clearable?: boolean;
  isLastDay?: boolean;
};

export const MonthPickerContainer: FC<MonthPickerContainerProps> = ({
  value,
  setValue,
  label = "YEAR MONTH",
  clearable = false,
  isLastDay = false,
}) => {
  const { offsetDate } = useDate();

  const onChange = (value: Date | null) => {
    if (value === null) {
      setValue(null);
      return;
    }
    if (isLastDay) {
      setValue(
        offsetDate(new Date(value.getFullYear(), value.getMonth() + 1, 0))
      );
      return;
    }
    setValue(offsetDate(value));
  };

  return (
    <MonthPickerPresenter
      value={value}
      onChange={onChange}
      label={label}
      clearable={clearable}
    />
  );
};
