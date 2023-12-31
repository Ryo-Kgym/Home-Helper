/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { Table, TableProps } from "@components/atoms/Table";
import { Button } from "@components/ui";

export const CreditCardDetailTablePresenter = ({
  tableProps,
  addHandler,
  backHandler,
}: {
  tableProps: TableProps[];
  addHandler: () => void;
  backHandler: () => void;
}) => (
  <div className={"grid col-span-1"}>
    <div className={"grid grid-cols-2"}>
      <Button colorType={"back"} onClick={backHandler} />
      <Button colorType={"add"} onClick={addHandler} />
    </div>
    <Table
      header={["日付", "ジャンル", "カテゴリ", "金額", "メモ"]}
      tablePropsList={tableProps}
      size={"xs"}
      toBottom
      height={"85vh"}
      defaultBottom={false}
    />
  </div>
);
