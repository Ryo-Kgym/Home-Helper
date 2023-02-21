import { FC } from "react";
import { Table, TableProps } from "@components/atoms/Table";

type CategoryPresenterProps = {
  tableProps: TableProps[];
};
export const CategoryPresenter: FC<CategoryPresenterProps> = ({
  tableProps,
}) => {
  return (
    <>
      <Table
        header={["収入", "ジャンル", "カテゴリ", "金額"]}
        tablePropsList={tableProps}
      />
    </>
  );
};
