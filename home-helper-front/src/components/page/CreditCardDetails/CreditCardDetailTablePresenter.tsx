/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { Table, TableProps } from "@components/atoms/Table";
import { Button } from "@components/ui";

export const CreditCardDetailTablePresenter = ({
  tableProps,
}: {
  tableProps: TableProps[];
}) => (
  <div className={"grid col-span-1"}>
    <Table
      header={["日付", "ジャンル", "カテゴリ", "金額", "メモ"]}
      tablePropsList={tableProps}
      size={"xs"}
      toBottom
      height={"85vh"}
      defaultBottom={false}
    />
    <div>
      <Button colorType={"add"} onClick={() => {}} />
    </div>
  </div>
);
