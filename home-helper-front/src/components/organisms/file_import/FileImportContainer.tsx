import { FileImportPresenter } from "@components/organisms/file_import/FileImportPresenter";
import { TableProps } from "@components/atoms/Table";
import category from "@pages/household/category";
import { useState } from "react";

export const FileImportContainer = () => {
  const [uploadFile, setUploadFile] = useState<File | null>(null);
  const [accountId, setAccountId] = useState<string | null>(null);
  const [withdrawalDate, setWithdrawalDate] = useState<Date | null>(null);

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

  return (
    <FileImportPresenter
      uploadFile={uploadFile}
      setUploadFile={setUploadFile}
      accountId={accountId}
      setAccountId={setAccountId}
      tableProps={tableProps}
      withdrawalDate={withdrawalDate}
      changeWithdrawalDate={setWithdrawalDate}
    />
  );
};

const mockImported = [
  { date: "2023-02-01", note: "Amazon Payで", price: 12000 },
  { date: "2023-02-05", note: "入金", price: -2000 },
  { date: "2023-02-20", note: "Amazon Payで", price: 1000 },
];
