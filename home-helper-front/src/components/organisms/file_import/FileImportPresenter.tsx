import { FC } from "react";
import { Table, TableProps } from "@components/atoms/Table";
import { FileInput } from "@components/atoms/FileInput";
import { AccountSelect } from "@components/molecules/CustomSelect/Account";
import { DatePicker } from "@components/atoms/DatePicker";

type FileImportPresenterProps = {
  uploadFile: File | null;
  setUploadFile: (file: File | null) => void;
  accountId: string | null;
  setAccountId: (accountId: string | null) => void;
  withdrawalDate: Date | null;
  changeWithdrawalDate: (date: Date | null) => void;
  tableProps: TableProps[];
};
export const FileImportPresenter: FC<FileImportPresenterProps> = ({
  uploadFile,
  setUploadFile,
  accountId,
  setAccountId,
  withdrawalDate,
  changeWithdrawalDate,
  tableProps,
}) => (
  <div className={"grid"}>
    <div className={"py-4"}>
      <FileInput file={uploadFile} setFile={setUploadFile} />
    </div>
    <div className={"py-4"}>
      <AccountSelect accountId={accountId} setAccountId={setAccountId} />
    </div>
    <div className={"py-4"}>
      <DatePicker
        value={withdrawalDate!}
        onChange={changeWithdrawalDate}
        required
        label={"WITHDRAWAL DATE"}
      />
    </div>
    <div>
      <Table
        header={["決済日", "備考", "支出金額", "ジャンル", "カテゴリ"]}
        tablePropsList={tableProps}
        size={"xs"}
      />
    </div>
  </div>
);
