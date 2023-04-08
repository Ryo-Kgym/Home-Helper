import { FC } from "react";
import { Table, TableProps } from "@components/atoms/Table";
import { RangeDatePicker } from "@components/molecules/RangeDatePicker";
import { Total } from "@components/molecules/Total";

type AccountPresenterProps = {
  fromDate: Date | null;
  changeFromDate: (date: Date | null) => void;
  toDate: Date | null;
  changeToDate: (date: Date | null) => void;
  tableProps: TableProps[];
  total: number | undefined;
};
export const AccountPresenter: FC<AccountPresenterProps> = ({
  fromDate,
  changeFromDate,
  toDate,
  changeToDate,
  tableProps,
  total,
}) => (
  <div>
    <RangeDatePicker
      fromDate={fromDate}
      changeFromDate={changeFromDate}
      toDate={toDate}
      changeToDate={changeToDate}
    />
    <Table
      header={["アカウント", "残高", "詳細"]}
      tablePropsList={tableProps}
      size={"sm"}
    />
    <Total total={total} />
  </div>
);
