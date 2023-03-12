import { MonthPicker } from "@components/atoms/Button/MonthPicker";
import { FC } from "react";

type RangeMonthPickerPresenterProps = {
  fromMonth: Date | null;
  changeFromMonth: (date: Date | null) => void;
  toMonth: Date | null;
  changeToMonth: (date: Date | null) => void;
};
export const RangeMonthPickerPresenter: FC<RangeMonthPickerPresenterProps> = ({
  fromMonth,
  changeFromMonth,
  toMonth,
  changeToMonth,
}) => (
  <div className={"grid grid-cols-5 items-center"}>
    <div className={"col-span-2"}>
      <MonthPicker
        value={fromMonth}
        changeValue={changeFromMonth}
        label={"FROM"}
      />
    </div>
    <div className={"text-center pt-7"}>〜</div>
    <div className={"col-span-2"}>
      <MonthPicker value={toMonth} changeValue={changeToMonth} label={"TO"} />
    </div>
  </div>
);
