import {
  useCreateCreditCardSummaryMutation,
  useCreateImportFileHistoryMutation,
} from "@graphql/postgraphile/generated/graphql";
import { FileType } from "@provider/file/FileType";
import { useLoadUser } from "@hooks/useLoadUser";
import { useUuid } from "@hooks/uuid/useUuid";
import { useDate } from "@hooks/date/useDate";
import { LoadFileProps } from "@components/organisms/file_import/loadUploadFile";

type useCreateImportFileArgs = {
  fileType: FileType;
  fileName: string;
  accountId: string;
  withdrawalDate: Date;
  loadData: LoadFileProps[];
};
export const useCreateImportFile = ({
  fileType,
  fileName,
  accountId,
  withdrawalDate,
  loadData,
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

  const [ignoreCreateCreditCardSummaryResult, createCreditCardSummaryMutation] =
    useCreateCreditCardSummaryMutation();

  const createCreditCardSummaryVariables = {
    id: uuid,
    creditCard: CreditCardMap.get(fileType) || "dummy",
    accountId: accountId,
    totalAmount: loadData.reduce((acc, cur) => acc + cur.price, 0),
    count: loadData.length,
    withdrawalDate: withdrawalDate,
  };

  return () => {
    const ignoreCreateImportFile = createImportFileMutation(
      createImportFileVariables
    );
    const ignoreCreateCreditCardSummary = createCreditCardSummaryMutation(
      createCreditCardSummaryVariables
    );
  };
};

const CreditCardMap = new Map<FileType, string>([
  [FileType.AU_PAY_CSV, "AU_PAY_CARD"],
  [FileType.SMBC_CSV, "AMAZON_CARD"],
]);
