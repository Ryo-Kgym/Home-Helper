import { FC } from "react";
import { FileTypeSelectPresenter } from "./FileTypeSelectPresenter";
import { SelectData } from "@components/atoms/Select/SelectPresenter";
import { FileType } from "@provider/file/FileType";

type FileTypeSelectContainerProps = {
  fileType: FileType | null;
  setFileType: (value: FileType | null) => void;
};
export const FileTypeSelectContainer: FC<FileTypeSelectContainerProps> = ({
  fileType,
  setFileType,
}) => {
  const fileTypes: SelectData[] = [
    {
      label: "三井住友銀行（Amazonカード）",
      value: FileType.SMBC_CSV,
    },
    {
      label: "Au Payカード",
      value: FileType.AU_CSV,
    },
    {
      label: "大分銀行 通帳",
      value: FileType.OITA_BANK_CSV,
    },
  ];

  return (
    <FileTypeSelectPresenter
      value={fileType}
      onChange={setFileType}
      fileTypes={fileTypes}
    />
  );
};
