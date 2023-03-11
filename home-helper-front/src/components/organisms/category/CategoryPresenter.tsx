import { FC } from "react";
import { Table, TableProps } from "@components/atoms/Table";
import { MonthPicker } from "@components/atoms/Button/MonthPicker";
import { Total } from "@components/molecules/Total";

type CategoryPresenterProps = {
  date: Date | null;
  changeDate: (date: Date | null) => void;
  tableProps: TableProps[];
  incomeTotal?: number;
  outcomeTotal?: number;
};
export const CategoryPresenter: FC<CategoryPresenterProps> = ({
  date,
  changeDate,
  tableProps,
  incomeTotal = 0,
  outcomeTotal = 0,
}) => {
  return (
    <div>
      <MonthPicker value={date} changeValue={changeDate} />
      <Table
        header={["区分", "ジャンル", "カテゴリ", "金額", "詳細"]}
        tablePropsList={tableProps}
        size={"sm"}
      />
      <Total income={incomeTotal} outcome={outcomeTotal} />
    </div>
  );
};
