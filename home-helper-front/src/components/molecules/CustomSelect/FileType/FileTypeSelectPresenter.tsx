import { FC } from "react";
import { Select } from "@components/atoms/Select";
import { SelectData } from "@components/atoms/Select/SelectPresenter";
import { FileType } from "@provider/file/FileType";

type FileTypeSelectPresenterProps = {
  value: FileType | null;
  onChange: (value: FileType | null) => void;
  fileTypes: SelectData[];
};
export const FileTypeSelectPresenter: FC<FileTypeSelectPresenterProps> = ({
  value,
  onChange,
  fileTypes,
}) => (
  <Select
    label={"FILE TYPE"}
    value={value?.toString() ?? null}
    onChange={(value) => {
      onChange(value as unknown as FileType);
    }}
    data={fileTypes}
    placeholder={"ファイル種類を選択してください"}
    withAsterisk
  />
);
