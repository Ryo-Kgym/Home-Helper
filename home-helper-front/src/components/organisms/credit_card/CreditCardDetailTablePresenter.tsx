import { FC } from "react";
import { Table, TableProps } from "@components/atoms/Table";

type CreditCardDetailTablePresenterProps = {
  tableProps: TableProps[];
};
export const CreditCardDetailTablePresenter: FC<
  CreditCardDetailTablePresenterProps
> = ({ tableProps }) => (
  <div className={"grid col-span-1"}>
    <Table
      header={["日付", "ジャンル", "カテゴリ", "金額", "メモ"]}
      tablePropsList={tableProps}
      size={"xs"}
    />
  </div>
);
