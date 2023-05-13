import { FC } from "react";
import { Table, TableProps } from "@components/atoms/Table";
import { IocomeTotal } from "@components/molecules/Total";
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
        header={["ジャンル", "金額"]}
        tablePropsList={tableProps}
        size={"xs"}
      />
      <IocomeTotal income={incomeTotal} outcome={outcomeTotal} />
    </div>
  );
};
