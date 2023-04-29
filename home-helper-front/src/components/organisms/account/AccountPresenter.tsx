import { FC } from "react";
import { Table, TableProps } from "@components/atoms/Table";
import { RangeDatePicker } from "@components/molecules/RangeDatePicker";
import { Total } from "@components/molecules/Total";
import { Modal } from "@components/atoms/Modal";
import { RegisterAccount } from "@components/organisms/register_account";
import { Button } from "@components/atoms/Button";

type AccountPresenterProps = {
  fromDate: Date | null;
  changeFromDate: (date: Date | null) => void;
  toDate: Date | null;
  changeToDate: (date: Date | null) => void;
  tableProps: TableProps[];
  total: number | undefined;
  isOpenRegister: boolean;
  onCloseRegister: () => void;
  onOpenRegister: () => void;
};
export const AccountPresenter: FC<AccountPresenterProps> = ({
  fromDate,
  changeFromDate,
  toDate,
  changeToDate,
  tableProps,
  total,
  isOpenRegister,
  onCloseRegister,
  onOpenRegister,
}) => (
  <div>
    <RangeDatePicker
      fromDate={fromDate}
      changeFromDate={changeFromDate}
      toDate={toDate}
      changeToDate={changeToDate}
    />
    <Table
      header={["アカウント", "残高"]}
      tablePropsList={tableProps}
      height={"70hv"}
      size={"xs"}
    />
    <Total total={total} />
    <Button onClick={onOpenRegister} colorType={"register"} />
    <Modal opened={isOpenRegister} onClose={onCloseRegister}>
      <RegisterAccount />
    </Modal>
  </div>
);
