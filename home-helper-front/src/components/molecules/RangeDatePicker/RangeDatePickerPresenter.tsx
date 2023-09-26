import { DatePicker } from "@components/atoms/DatePicker";

type RangeDatePickerPresenterProps = {
  fromDate: Date | null;
  changeFromDate: (_: Date) => void;
  toDate: Date | null;
  changeToDate: (_: Date) => void;
  disabled?: boolean;
};
export const RangeDatePickerPresenter = ({
  fromDate = new Date("2010-01-01"),
  changeFromDate,
  toDate = new Date("2099-12-31"),
  changeToDate,
  disabled = false,
}: RangeDatePickerPresenterProps) => (
  <div className={"grid grid-cols-5 items-center"}>
    <div className={"col-span-2"}>
      <DatePicker
        label={"FROM"}
        value={fromDate!}
        onChange={changeFromDate}
        disabled={disabled}
      />
    </div>
    <div className={"text-center pt-7"}>〜</div>
    <div className={"col-span-2"}>
      <DatePicker
        label={"TO"}
        value={toDate!}
        onChange={changeToDate}
        disabled={disabled}
        required
      />
    </div>
  </div>
);
