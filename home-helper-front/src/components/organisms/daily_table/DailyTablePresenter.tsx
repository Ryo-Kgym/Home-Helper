import { FC } from "react";
import { Table, TableProps } from "@components/atoms/Table";
import { RangeDatePicker } from "@components/molecules/RangeDatePicker";
import { Total } from "@components/molecules/Total";

type DailyTablePresenterProps = {
  fromDate: Date | null;
  changeFromDate: (date: Date) => void;
  toDate: Date | null;
  changeToDate: (date: Date) => void;
  tablePropsList: TableProps[];
  incomeTotal: number | undefined;
  outcomeTotal: number | undefined;
  disabled: boolean;
};
export const DailyTablePresenter: FC<DailyTablePresenterProps> = ({
  fromDate,
  changeFromDate,
  toDate,
  changeToDate,
  tablePropsList,
  incomeTotal,
  outcomeTotal,
  disabled,
}) => (
  <div>
    <RangeDatePicker
      fromDate={fromDate}
      changeFromDate={changeFromDate}
      toDate={toDate}
      changeToDate={changeToDate}
      disabled={disabled}
    />
    <Table
      header={["日付", "ジャンル", "カテゴリ", "アカウント", "金額", "メモ"]}
      tablePropsList={tablePropsList}
      size={"xs"}
    />
    <Total income={incomeTotal} outcome={outcomeTotal} />
  </div>
);
