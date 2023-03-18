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

  const importDisabled =
    !uploadFile ||
    !accountId ||
    !withdrawalDate ||
    loadData.filter((d) => d.categoryId === null).length > 0;

  const registerDisabled =
    loadData.length == 0 ||
    loadData.filter((d) => d.categoryId === null).length > 0;

  const [opened, setOpened] = useState(false);
  const [initialValues, setInitialValues] = useState<LoadFileProps | null>(
    null
  );

  const tableProps: TableProps[] = loadData.map((d) => {
    return {
      keyPrefix: "load",
      columns: [
        { value: d.date.toISOString().slice(0, 10), align: "center" },
        { value: d.note, align: "left" },
        { value: d.price.toLocaleString(), align: "right" },
        { value: d.genreName, align: "left" },
        { value: d.categoryName, align: "left" },
      ],
      onClick: () => {
        setOpened(true);
        setInitialValues(d);
      },
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
      opened={opened}
      onClose={() => setOpened(false)}
      initialValues={initialValues!}
      loadData={loadData}
      setLoadData={setLoadData}
    />
  );
};
