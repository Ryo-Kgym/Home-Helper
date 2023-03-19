import { FileInput, rem } from "@mantine/core";
import { IconUpload } from "@tabler/icons-react";
import { FC } from "react";

type FileInputPresenterProps = {
  file: File | null;
  setFile: (file: File | null) => void;
};
export const FileInputPresenter: FC<FileInputPresenterProps> = ({
  file,
  setFile,
}) => (
  <FileInput
    value={file}
    onChange={setFile}
    label="UPLOAD FILE"
    placeholder="ファイルを選択してください"
    icon={<IconUpload size={rem(18)} />}
    size={"lg"}
    withAsterisk
    error={file === null ? "Required" : undefined}
  />
);
