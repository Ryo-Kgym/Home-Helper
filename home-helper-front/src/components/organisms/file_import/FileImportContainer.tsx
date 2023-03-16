import { FileImportPresenter } from "./FileImportPresenter";
import { TableProps } from "@components/atoms/Table";
import { useState } from "react";
import { FileType } from "@provider/file/FileType";
import {
  LoadFileProps,
  loadUploadFile,
} from "@components/organisms/file_import/loadUploadFile";

export const FileImportContainer = () => {
  const [uploadFile, setUploadFile] = useState<File | null>(null);
  const [accountId, setAccountId] = useState<string | null>(null);
  const [withdrawalDate, setWithdrawalDate] = useState<Date | null>(null);
  const [fileType, setFileType] = useState<FileType | null>(FileType.SMBC_CSV);

  const [loadData, setLoadData] = useState<LoadFileProps[]>([]);
  const disabled = !uploadFile || !accountId || !withdrawalDate;

  const tableProps: TableProps[] = loadData.map((d) => {
    return {
      keyPrefix: "load",
      columns: [
        { value: d.date.toISOString().slice(0, 10), align: "center" },
        { value: d.note, align: "left" },
        { value: d.price.toLocaleString(), align: "right" },
        { value: "", align: "left" },
        { value: "", align: "left" },
      ],
    };
  });

  const loadClickHandler = async () => {
    setLoadData(
      await loadUploadFile({
        uploadFile: uploadFile!,
        fileType: fileType!,
      })
    );
  };

  return (
    <FileImportPresenter
      uploadFile={uploadFile}
      setUploadFile={setUploadFile}
      accountId={accountId}
      setAccountId={setAccountId}
      tableProps={tableProps}
      withdrawalDate={withdrawalDate}
      changeWithdrawalDate={setWithdrawalDate}
      loadClickHandler={loadClickHandler}
      disabled={disabled}
    />
  );
};
