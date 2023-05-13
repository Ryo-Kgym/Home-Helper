import { FC } from "react";
import { Table, TableProps } from "@components/atoms/Table";

type CreditCardTablePresenterProps = {
  tableProps: TableProps[];
};
export const CreditCardTablePresenter: FC<CreditCardTablePresenterProps> = ({
  tableProps,
}) => (
  <div className={"grid col-span-1"}>
    <Table
      header={["引落日", "種類", "アカウント", "合計"]}
      tablePropsList={tableProps}
      size={"xs"}
      toBottom
      height={"90vh"}
    />
  </div>
);
