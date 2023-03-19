import { FC } from "react";
import { FileInput } from "@components/atoms/FileInput";
import { AccountSelect } from "@components/molecules/CustomSelect/Account";
import { DatePicker } from "@components/atoms/DatePicker";
import { FileTypeSelect } from "@components/molecules/CustomSelect/FileType";
import { FileType } from "@provider/file/FileType";

type FileImportPresenterProps = {
  fileType: FileType | null;
  setFileType: (value: FileType | null) => void;
  uploadFile: File | null;
  setUploadFile: (file: File | null) => void;
  accountId: string | null;
  setAccountId: (accountId: string | null) => void;
  withdrawalDate: Date | null;
  changeWithdrawalDate: (date: Date | null) => void;
};
export const FileImportFieldPresenter: FC<FileImportPresenterProps> = ({
  fileType,
  setFileType,
  uploadFile,
  setUploadFile,
  accountId,
  setAccountId,
  withdrawalDate,
  changeWithdrawalDate,
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
  </div>
);
