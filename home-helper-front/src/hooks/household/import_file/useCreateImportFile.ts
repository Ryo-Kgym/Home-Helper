import { useCreateImportFileHistoryMutation } from "@graphql/postgraphile/generated/graphql";
import { FileType } from "@provider/file/FileType";
import { useLoadUser } from "@hooks/useLoadUser";
import { useUuid } from "@hooks/uuid/useUuid";
import { useDate } from "@hooks/date/useDate";

type useCreateImportFileArgs = {
  fileType: FileType;
  fileName: string;
};
export const useCreateImportFile = ({
  fileType,
  fileName,
}: useCreateImportFileArgs) => {
  const loadUser = useLoadUser();
  const uuid = useUuid();

  const [ignoreCreateImportFileResult, createImportFileMutation] =
    useCreateImportFileHistoryMutation();

  const createImportFileVariables = {
    id: uuid,
    fileType: fileType,
    fileName: fileName,
    importUserId: loadUser.getUserId,
    importDatetime: useDate(),
  };

  return () => {
    const ignore = createImportFileMutation(createImportFileVariables);
  };
};
