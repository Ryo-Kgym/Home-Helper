import { MonthPicker } from "@components/atoms/MonthPicker";

type DualMonthPickerPresenterProps = {
  fromMonth: Date | null;
  changeFromMonth: (_: Date | null) => void;
  toMonth: Date | null;
  changeToMonth: (_: Date | null) => void;
};
export const DualMonthPickerPresenter = ({
  fromMonth,
  changeFromMonth,
  toMonth,
  changeToMonth,
}: DualMonthPickerPresenterProps) => (
  <div className={"grid grid-cols-5 items-center"}>
    <div className={"col-span-2"}>
      <MonthPicker value={fromMonth} setValue={changeFromMonth} />
    </div>
    <div className={"text-center pt-7"}>〜</div>
    <div className={"col-span-2"}>
      <MonthPicker value={toMonth} setValue={changeToMonth} isLastDay />
    </div>
  </div>
);
