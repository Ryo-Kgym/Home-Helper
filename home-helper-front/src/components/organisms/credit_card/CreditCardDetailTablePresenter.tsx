import { FC } from "react";
import { Table, TableProps } from "@components/atoms/Table";
import { Modal } from "@components/atoms/Modal";
import { UpdateCreditCardDetail } from "@components/organisms/update_credit_card_detail";
import { CreditCardDetail } from "@domain/model/household/CreditCardDetail";

type CreditCardDetailTablePresenterProps = {
  tableProps: TableProps[];
  initData: CreditCardDetail | null;
  opened: boolean;
  onClose: () => void;
};
export const CreditCardDetailTablePresenter: FC<
  CreditCardDetailTablePresenterProps
> = ({ tableProps, initData, opened, onClose }) => (
  <div className={"grid col-span-1"}>
    <Table
      header={["日付", "ジャンル", "カテゴリ", "金額", "メモ"]}
      tablePropsList={tableProps}
      size={"xs"}
    />
    <Modal opened={opened} onClose={onClose}>
      <UpdateCreditCardDetail initData={initData} onClose={onClose} />
    </Modal>
  </div>
);
