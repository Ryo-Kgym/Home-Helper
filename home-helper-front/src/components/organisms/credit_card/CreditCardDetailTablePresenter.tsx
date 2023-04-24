import { FC } from "react";
import { Table, TableProps } from "@components/atoms/Table";
import { Modal } from "@components/atoms/Modal";
import { UpdateCreditCardDetail } from "@components/organisms/update_credit_card_detail";

type CreditCardDetailTablePresenterProps = {
  tableProps: TableProps[];
  opened: boolean;
  onClose: () => void;
  detailId: string | null;
};
export const CreditCardDetailTablePresenter: FC<
  CreditCardDetailTablePresenterProps
> = ({ tableProps, opened, onClose, detailId }) => (
  <div className={"grid col-span-1"}>
    <Table
      header={["日付", "ジャンル", "カテゴリ", "金額", "メモ"]}
      tablePropsList={tableProps}
      size={"xs"}
    />
    <Modal opened={opened} onClose={onClose}>
      <UpdateCreditCardDetail id={detailId} onClose={onClose} />
    </Modal>
  </div>
);
