import { ReactNode } from "react";
import { MonthPickerPresenter } from "@components/atoms/MonthPicker/MonthPickerPresenter";
import { useDate } from "@hooks/date/useDate";

type MonthPickerContainerProps = {
  value: Date | null;
  setValue: (_: Date | null) => void;
  label?: string;
  clearable?: boolean;
  isLastDay?: boolean;
};

export const MonthPickerContainer = ({
  value,
  setValue,
  label = "",
  clearable = false,
  isLastDay = false,
}: MonthPickerContainerProps) => {
  const { offsetDate } = useDate();

  const onChange = (value: Date | null) => {
    if (value === null) {
      setValue(null);
      return;
    }
    if (isLastDay) {
      setValue(
        offsetDate(new Date(value.getFullYear(), value.getMonth() + 1, 0)),
      );
      return;
    }
    setValue(offsetDate(value));
  };

  const prevMonthHandler = () => {
    if (value === null) {
      return;
    }
    setValue(
      offsetDate(new Date(value.getFullYear(), value.getMonth() - 1, 1)),
    );
  };

  const nextMonthHandler = () => {
    if (value === null) {
      return;
    }
    setValue(
      offsetDate(new Date(value.getFullYear(), value.getMonth() + 1, 1)),
    );
  };

  return (
    <div className={"grid grid-cols-4"}>
      <JumpIcon onClick={prevMonthHandler}>&lt;</JumpIcon>
      <div className={"col-span-2 py-2"}>
        <MonthPickerPresenter
          value={value}
          onChange={onChange}
          label={label}
          clearable={clearable}
        />
      </div>
      <JumpIcon onClick={nextMonthHandler}>&gt;</JumpIcon>
    </div>
  );
};

const JumpIcon = ({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: () => void;
}) => (
  <button
    className={
      "mx-auto pb-2 text-6xl bg-inherit cursor-pointer text-gray-400 hover:text-gray-800"
    }
    onClick={onClick}
  >
    {children}
  </button>
);
