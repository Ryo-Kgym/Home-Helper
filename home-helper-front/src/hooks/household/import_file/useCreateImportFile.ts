import {
  useCreateCreditCardDetailMutation,
  useCreateCreditCardSummaryMutation,
  useCreateDailyDetailMutation,
  useCreateImportFileHistoryMutation,
} from "@graphql/postgraphile/generated/graphql";
import { FileType } from "@provider/file/FileType";
import { useUuid } from "@hooks/uuid/useUuid";
import { useDate } from "@hooks/date/useDate";
import { LoadFileProps } from "@components/organisms/file_import/loadUploadFile";
import { useRegisterDailyDetails } from "@hooks/household/import_file/useRegisterDailyDetails";
import { useRegisterCreditCard } from "@hooks/household/import_file/useRegisterCreditCard";
import { useRecoilState } from "recoil";
import { userIdState } from "@recoil/userIdState";

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
  const [userId] = useRecoilState(userIdState);
  const uuid = useUuid();
  const { now } = useDate();

  // Common table
  const [ignore, createImportFileMutation] =
    useCreateImportFileHistoryMutation();

  const createImportFileVariables = {
    id: uuid,
    fileType: fileType,
    fileName: fileName,
    importUserId: userId,
    importDatetime: now,
  };

  // Credit card Only
  const [ignore1, createCreditCardSummaryMutation] =
    useCreateCreditCardSummaryMutation();

  // Credit card Only
  const [ignore2, createCreditCardDetailMutation] =
    useCreateCreditCardDetailMutation();

  // Not credit card
  const [ignore3, createDailyDetailMutation] = useCreateDailyDetailMutation();

  return () => {
    createImportFileMutation(createImportFileVariables);

    setTimeout(
      RegistrationMap.get(fileType)!({
        createCreditCardSummaryMutation,
        createCreditCardDetailMutation,
        createDailyDetailMutation,
        uuid,
        fileType,
        accountId,
        withdrawalDate,
        loadData,
        userId,
      }),
      100
    );
  };
};

export type RegistrationArgs = {
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

const RegistrationMap = new Map<
  FileType,
  (args: RegistrationArgs) => () => void
>([
  [FileType.AU_PAY_CSV, useRegisterCreditCard],
  [FileType.SMBC_CSV, useRegisterCreditCard],
  [FileType.OITA_BANK_CSV, useRegisterDailyDetails],
]);
