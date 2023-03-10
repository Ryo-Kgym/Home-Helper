import { FC } from "react";
import { DatePicker } from "@components/atoms/DatePicker";

type RangeDatePickerPresenterProps = {
  fromDate: Date | null;
  changeFromDate: (date: Date) => void;
  toDate: Date | null;
  changeToDate: (date: Date) => void;
};
export const RangeDatePickerPresenter: FC<RangeDatePickerPresenterProps> = ({
  fromDate = new Date("2010-01-01"),
  changeFromDate,
  toDate = new Date("2099-12-31"),
  changeToDate,
}) => (
  <div className={"grid grid-cols-5 items-center"}>
    <div className={"col-span-2"}>
      <DatePicker label={"FROM"} value={fromDate!} onChange={changeFromDate} />
    </div>
    <div className={"text-center pt-7"}>〜</div>
    <div className={"col-span-2"}>
      <DatePicker label={"TO"} value={toDate!} onChange={changeToDate} />
    </div>
  </div>
);
