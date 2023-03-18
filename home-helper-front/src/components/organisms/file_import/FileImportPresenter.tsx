import { FC } from "react";
import { Table, TableProps } from "@components/atoms/Table";
import { FileInput } from "@components/atoms/FileInput";
import { AccountSelect } from "@components/molecules/CustomSelect/Account";
import { DatePicker } from "@components/atoms/DatePicker";
import { Button } from "@components/atoms/Button";
import { FileTypeSelect } from "@components/molecules/CustomSelect/FileType";
import { FileType } from "@provider/file/FileType";
import { Modal } from "@components/atoms/Modal";
import { SetProperties } from "@components/organisms/file_import/SetProperties";
import { LoadFileProps } from "@components/organisms/file_import/loadUploadFile";

type FileImportPresenterProps = {
  tableProps: TableProps[];
  fileType: FileType | null;
  setFileType: (value: FileType | null) => void;
  uploadFile: File | null;
  setUploadFile: (file: File | null) => void;
  accountId: string | null;
  setAccountId: (accountId: string | null) => void;
  withdrawalDate: Date | null;
  changeWithdrawalDate: (date: Date | null) => void;
  importDisabled: boolean;
  registerDisabled: boolean;
  importClickHandler: () => void;
  clearClickHandler: () => void;
  registerClickHandler: () => void;
  opened: boolean;
  onClose: () => void;
  initialValues: LoadFileProps;
  loadData: LoadFileProps[];
  setLoadData: (loadData: LoadFileProps[]) => void;
};
export const FileImportPresenter: FC<FileImportPresenterProps> = ({
  tableProps,
  fileType,
  setFileType,
  uploadFile,
  setUploadFile,
  accountId,
  setAccountId,
  withdrawalDate,
  changeWithdrawalDate,
  importDisabled,
  registerDisabled,
  importClickHandler,
  clearClickHandler,
  registerClickHandler,
  opened,
  onClose,
  initialValues,
  loadData,
  setLoadData,
}) => (
  <div className={"grid"}>
    <div className={"py-2"}>
      <FileTypeSelect fileType={fileType} setFileType={setFileType} />
    </div>
    <div className={"py-2"}>
      <FileInput file={uploadFile} setFile={setUploadFile} />
    </div>
    <div className={"py-2"}>
      <AccountSelect accountId={accountId} setAccountId={setAccountId} />
    </div>
    <div className={"py-2"}>
      <DatePicker
        value={withdrawalDate!}
        onChange={changeWithdrawalDate}
        required
        label={"WITHDRAWAL DATE"}
      />
    </div>
    <div className={"py-2"}>
      <Button
        onClick={importClickHandler}
        disabled={importDisabled}
        colorType={"import"}
      />
      <Button onClick={clearClickHandler} colorType={"clear"} />
      <Button
        onClick={registerClickHandler}
        colorType={"register"}
        disabled={registerDisabled}
      />
    </div>
    <div>
      <Table
        header={["決済日", "備考", "支出金額", "ジャンル", "カテゴリ"]}
        tablePropsList={tableProps}
        size={"xs"}
        height={"45vh"}
      />
    </div>
    <Modal opened={opened} onClose={onClose}>
      <SetProperties
        initialValues={initialValues}
        initLoadData={loadData}
        setLoadData={setLoadData}
        onClose={onClose}
      />
    </Modal>
  </div>
);
