/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { Modal } from "@components/atoms/Modal/index";
import { Table, TableProps } from "@components/atoms/Table/index";
import { UpdateCreditCardDetail } from "@components/organisms/update_credit_card_detail/index";

type CreditCardDetailTablePresenterProps = {
  tableProps: TableProps[];
  opened: boolean;
  onClose: () => void;
  detailId: string | null;
};
export const CreditCardDetailTablePresenter = ({
  tableProps,
  opened,
  onClose,
  detailId,
}: CreditCardDetailTablePresenterProps) => (
  <div className={"grid col-span-1"}>
    <Table
      header={["日付", "ジャンル", "カテゴリ", "金額", "メモ"]}
      tablePropsList={tableProps}
      size={"xs"}
      toBottom
      height={"85vh"}
    />
    <Modal opened={opened} onClose={onClose}>
      <UpdateCreditCardDetail id={detailId} onClose={onClose} />
    </Modal>
  </div>
);
