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

  // Credit card Only
  const [ignore2, createCreditCardDetailMutation] =
    useCreateCreditCardDetailMutation();

  // Not credit card
  const [ignore3, createDailyDetailMutation] = useCreateDailyDetailMutation();

  const individualRegistration = RegistrationMap.get(fileType)!({
    createCreditCardSummaryMutation,
    createCreditCardDetailMutation,
    createDailyDetailMutation,
    uuid,
    fileType,
    accountId,
    withdrawalDate,
    loadData,
    userId: loadUser.getUserId,
  });

  return () => {
    createImportFileMutation(createImportFileVariables);

    individualRegistration();
  };
};

const CreditCardMap = new Map<FileType, string>([
  [FileType.AU_PAY_CSV, "AU_PAY_CARD"],
  [FileType.SMBC_CSV, "AMAZON_CARD"],
]);

type Args = {
  createCreditCardSummaryMutation: any;
  createCreditCardDetailMutation: any;
  createDailyDetailMutation: any;
  uuid: string;
  fileType: FileType;
  accountId: string;
  withdrawalDate: Date;
  loadData: LoadFileProps[];
  userId: string;
};
const registerCreditCard = ({
  createCreditCardSummaryMutation,
  createCreditCardDetailMutation,
  uuid,
  fileType,
  accountId,
  withdrawalDate,
  loadData,
}: Args) => {
  const summaryVariableList = {
    id: uuid,
    creditCard: CreditCardMap.get(fileType) || "other",
    accountId: accountId,
    totalAmount: loadData.reduce((acc, cur) => acc + cur.price, 0),
    count: loadData.length,
    withdrawalDate: withdrawalDate,
  };

  const detailVariableList = loadData.map((data) => ({
    date: data.date,
    categoryId: data.categoryId!,
    amount: data.price,
    memo: data.note,
    summaryId: uuid,
  }));

  return () => {
    createCreditCardSummaryMutation(summaryVariableList);
    detailVariableList.map((variable) =>
      createCreditCardDetailMutation(variable)
    );
  };
};
const registerDailyDetails = ({
  createDailyDetailMutation,
  accountId,
  loadData,
  userId,
}: Args) => {
  const createDailyDetailVariableList = loadData.map((data) => ({
    date: data.date,
    categoryId: data.categoryId!,
    accountId: accountId,
    amount: data.price,
    memo: data.note,
    userId: userId,
  }));

  return () => {
    createDailyDetailVariableList.map((variable) =>
      createDailyDetailMutation(variable)
    );
  };
};

const RegistrationMap = new Map<FileType, (args: Args) => () => void>([
  [FileType.AU_PAY_CSV, registerCreditCard],
  [FileType.SMBC_CSV, registerCreditCard],
  [FileType.OITA_BANK_CSV, registerDailyDetails],
]);
