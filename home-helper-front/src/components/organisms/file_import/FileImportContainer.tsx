import { FileImportPresenter } from "./FileImportPresenter";
import { TableProps } from "@components/atoms/Table";
import { useState } from "react";
import { FileType } from "@provider/file/FileType";
import {
  LoadFileProps,
  loadUploadFile,
} from "@components/organisms/file_import/loadUploadFile";
import { successPopup } from "@function/successPopup";

export const FileImportContainer = () => {
  const [uploadFile, setUploadFile] = useState<File | null>(null);
  const [accountId, setAccountId] = useState<string | null>(null);
  const [withdrawalDate, setWithdrawalDate] = useState<Date | null>(null);
  const [fileType, setFileType] = useState<FileType | null>(null);

  const [loadData, setLoadData] = useState<LoadFileProps[]>([]);
  const importDisabled = !uploadFile || !accountId || !withdrawalDate;
  const registerDisabled = !loadData.length;

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

  const clearClickHandler = () => {
    setUploadFile(null);
    setAccountId(null);
    setWithdrawalDate(null);
    setFileType(null);
    setLoadData([]);
  };

  const registerClickHandler = () => {
    successPopup("登録しました");
  };

  return (
    <FileImportPresenter
      tableProps={tableProps}
      fileType={fileType}
      setFileType={setFileType}
      uploadFile={uploadFile}
      setUploadFile={setUploadFile}
      accountId={accountId}
      setAccountId={setAccountId}
      withdrawalDate={withdrawalDate}
      changeWithdrawalDate={setWithdrawalDate}
      importDisabled={importDisabled}
      registerDisabled={registerDisabled}
      importClickHandler={loadClickHandler}
      clearClickHandler={clearClickHandler}
      registerClickHandler={registerClickHandler}
    />
  );
};
