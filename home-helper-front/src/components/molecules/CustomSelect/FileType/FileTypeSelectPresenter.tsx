import { Select } from "@components/atoms/Select";
import { SelectData } from "@components/atoms/Select/SelectPresenter";
import { FileType } from "@provider/file/FileType";

type FileTypeSelectPresenterProps = {
  value: FileType | null;
  onChange: (_: FileType | null) => void;
  fileTypes: SelectData[];
};
export const FileTypeSelectPresenter = ({
  value,
  onChange,
  fileTypes,
}: FileTypeSelectPresenterProps) => (
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
