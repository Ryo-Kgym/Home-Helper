import { MonthPickerInput } from "@mantine/dates";

type MonthPickerPresenterProps = {
  value: Date | null;
  onChange: (_: Date | null) => void;
  label: string;
  clearable: boolean;
};
export const MonthPickerPresenter = ({
  value,
  onChange,
  label,
  clearable,
}: MonthPickerPresenterProps) => (
  <>
    <MonthPickerInput
      className={"max-sm:hidden"}
      label={label}
      placeholder="YYYY-MM"
      valueFormat={"YYYY-MM"}
      yearLabelFormat={"YYYY"}
      monthsListFormat={"MM"}
      value={value}
      onChange={onChange}
      size={"lg"}
      clearable={clearable}
    />
    <MonthPickerInput
      className={"sm:hidden"}
      label={label}
      placeholder="YYYY-MM"
      valueFormat={"YYYY-MM"}
      yearLabelFormat={"YYYY"}
      monthsListFormat={"MM"}
      value={value}
      onChange={onChange}
      size={"xs"}
      clearable={clearable}
    />
  </>
);
