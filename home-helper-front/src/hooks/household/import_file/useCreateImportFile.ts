import {
  useCreateCreditCardDetailMutation,
  useCreateCreditCardSummaryMutation,
  useCreateDailyDetailMutation,
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

  // Common table
  const [ignore, createImportFileMutation] =
    useCreateImportFileHistoryMutation();

  const createImportFileVariables = {
    id: uuid,
    fileType: fileType,
    fileName: fileName,
    importUserId: loadUser.getUserId,
    importDatetime: useDate(),
  };

  // Credit card Only
  const [ignore1, createCreditCardSummaryMutation] =
    useCreateCreditCardSummaryMutation();

  const createCreditCardSummaryVariables = {
    id: uuid,
    creditCard: CreditCardMap.get(fileType) || "dummy",
    accountId: accountId,
    totalAmount: loadData.reduce((acc, cur) => acc + cur.price, 0),
    count: loadData.length,
    withdrawalDate: withdrawalDate,
  };

  // Credit card Only
  const [ignore2, createCreditCardDetailMutation] =
    useCreateCreditCardDetailMutation();

  const createCreditCardDetailVariableList = loadData.map((data) => ({
    date: data.date,
    categoryId: data.categoryId!,
    amount: data.price,
    memo: data.note,
    summaryId: uuid,
  }));

  // Not credit card
  const [ignore3, createDailyDetailMutation] = useCreateDailyDetailMutation();

  const createDailyDetailVariableList = loadData.map((data) => ({
    date: data.date,
    categoryId: data.categoryId!,
    accountId: accountId,
    amount: data.price,
    memo: data.note,
    userId: loadUser.getUserId,
  }));

  return () => {
    createImportFileMutation(createImportFileVariables);

    createCreditCardSummaryMutation(createCreditCardSummaryVariables);
    createCreditCardDetailVariableList.map((variable) =>
      createCreditCardDetailMutation(variable)
    );
    createDailyDetailVariableList.map((variable) =>
      createDailyDetailMutation(variable)
    );
  };
};

const CreditCardMap = new Map<FileType, string>([
  [FileType.AU_PAY_CSV, "AU_PAY_CARD"],
  [FileType.SMBC_CSV, "AMAZON_CARD"],
]);
