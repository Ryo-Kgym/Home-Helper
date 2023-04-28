import { FC } from "react";
import { YearPickerInput } from "@mantine/dates";

type YearPickerPresenterProps = {
  year: Date | null;
  setYear: (year: Date | null) => void;
};

export const YearPickerPresenter: FC<YearPickerPresenterProps> = ({
  year,
  setYear,
}) => {
  return (
    <YearPickerInput
      label="YEAR"
      placeholder="yyyy"
      value={year}
      onChange={setYear}
      mx="auto"
      maw={400}
      clearable={false}
    />
  );
};
