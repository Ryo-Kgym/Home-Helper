/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { Table, TableProps } from "@components/atoms/Table";

export const CreditCardDetailTablePresenter = ({
  tableProps,
  opened,
  onClose,
  detailId,
}: {
  tableProps: TableProps[];
  opened: boolean;
  onClose: () => void;
  detailId: string | null;
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
    {/*<Modal opened={opened} onClose={onClose}>*/}
    {/*  <UpdateCreditCardDetail id={detailId} onClose={onClose} />*/}
    {/*</Modal>*/}
  </div>
);
