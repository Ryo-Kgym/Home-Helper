import { FC } from "react";
import { MonthPickerPresenter } from "@components/atoms/MonthPicker/MonthPickerPresenter";
import { useDate } from "@hooks/date/useDate";

type MonthPickerContainerProps = {
  value: Date | null;
  changeValue: (value: Date | null) => void;
  label?: string;
  clearable?: boolean;
};

export const MonthPickerContainer: FC<MonthPickerContainerProps> = ({
  value,
  changeValue,
  label = "YEAR MONTH",
  clearable = false,
}) => {
  const { offsetDate } = useDate();

  const setValue = (value: Date | null) => {
    if (value === null) {
      changeValue(null);
      return;
    }
    changeValue(offsetDate(value));
  };

  return (
    <MonthPickerPresenter
      value={value}
      setValue={setValue}
      label={label}
      clearable={clearable}
    />
  );
};
