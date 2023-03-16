import { FileImportPresenter } from "./FileImportPresenter";
import { TableProps } from "@components/atoms/Table";
import category from "@pages/household/category";
import { useState } from "react";
import { loadCsvFile } from "@provider/file/loader/csv/loadCsvFile";
import { FileType } from "@provider/file/FileType";
import { SmbcCsvLine } from "@provider/file/loader/csv/SmbcCsvLine";

export const FileImportContainer = () => {
  const [uploadFile, setUploadFile] = useState<File | null>(null);
  const [accountId, setAccountId] = useState<string | null>(null);
  const [withdrawalDate, setWithdrawalDate] = useState<Date | null>(null);
  const [fileType, setFileType] = useState<FileType | null>(FileType.SMBC_CSV);

  const tableProps: TableProps[] = mockImported.map((d) => {
    return {
      keyPrefix: "category",
      columns: [
        { value: d.date, align: "center" },
        { value: d.note, align: "left" },
        { value: d.price.toLocaleString(), align: "right" },
        { value: "", align: "left" },
        { value: "", align: "left" },
      ],
    };
  });

  const loadClickHandler = async () => {
    const res: Array<SmbcCsvLine> = await loadCsvFile({
      file: uploadFile!,
      fileType: fileType!,
    });
    res.map((d) => {
      console.log(d.date());
      console.log(d.shopName());
      console.log(d.price());
      console.log(d.note());
    });
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
    />
  );
};

const mockImported = [
  { date: "2023-02-01", note: "Amazon Payで", price: 12000 },
  { date: "2023-02-05", note: "入金", price: -2000 },
  { date: "2023-02-20", note: "Amazon Payで", price: 1000 },
];
