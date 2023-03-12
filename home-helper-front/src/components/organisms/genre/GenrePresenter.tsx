import { FC } from "react";
import { Table, TableProps } from "@components/atoms/Table";
import { Total } from "@components/molecules/Total";
import { RangeMonthPicker } from "@components/molecules/RangeMonthPicker";

type CategoryPresenterProps = {
  fromMonth: Date | null;
  changeFromMonth: (date: Date | null) => void;
  toMonth: Date | null;
  changeToMonth: (date: Date | null) => void;
  tableProps: TableProps[];
  incomeTotal: number | undefined;
  outcomeTotal: number | undefined;
};
export const GenrePresenter: FC<CategoryPresenterProps> = ({
  fromMonth,
  changeFromMonth,
  toMonth,
  changeToMonth,
  tableProps,
  incomeTotal,
  outcomeTotal,
}) => {
  return (
    <div>
      <RangeMonthPicker
        fromMonth={fromMonth}
        changeFromMonth={changeFromMonth}
        toMonth={toMonth}
        changeToMonth={changeToMonth}
      />
      <Table
        header={["区分", "ジャンル", "カテゴリ", "金額", "詳細"]}
        tablePropsList={tableProps}
        size={"sm"}
      />
      <Total income={incomeTotal} outcome={outcomeTotal} />
    </div>
  );
};
