import { FC } from "react";
import { Table, TableProps } from "@components/atoms/Table";
import { RangeDatePicker } from "@components/molecules/RangeDatePicker";

type DailyTablePresenterProps = {
  fromDate: Date | null;
  changeFromDate: (date: Date) => void;
  toDate: Date | null;
  changeToDate: (date: Date) => void;
  tablePropsList: TableProps[];
};
export const DailyTablePresenter: FC<DailyTablePresenterProps> = ({
  fromDate,
  changeFromDate,
  toDate,
  changeToDate,
  tablePropsList,
}) => (
  <div>
    <RangeDatePicker
      fromDate={fromDate}
      changeFromDate={changeFromDate}
      toDate={toDate}
      changeToDate={changeToDate}
    />
    <Table
      header={["日付", "ジャンル", "カテゴリ", "アカウント", "金額", "メモ"]}
      tablePropsList={tablePropsList}
      size={"xs"}
    />
  </div>
);
