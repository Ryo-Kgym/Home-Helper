import { FC } from "react";
import { Table, TableProps } from "@components/atoms/Table";
import { MonthPicker } from "@components/atoms/Button/MonthPicker";

type CategoryPresenterProps = {
  date: Date | null;
  changeDate: (date: Date | null) => void;
  tableProps: TableProps[];
};
export const CategoryPresenter: FC<CategoryPresenterProps> = ({
  date,
  changeDate,
  tableProps,
}) => {
  return (
    <div>
      <MonthPicker value={date} changeValue={changeDate} />
      <Table
        header={["区分", "ジャンル", "カテゴリ", "金額"]}
        tablePropsList={tableProps}
        size={"sm"}
      />
    </div>
  );
};
