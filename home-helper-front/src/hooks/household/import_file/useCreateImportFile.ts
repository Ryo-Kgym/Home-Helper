/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { LoadFileProps } from "@components/organisms/file_import/loadUploadFile";
import {
  useCreateCreditCardDetailMutation,
  useCreateCreditCardSummaryMutation,
  useCreateDailyDetailMutation,
  useCreateImportFileHistoryMutation,
} from "@graphql/hasura/generated/hasuraGraphql";
import { useDate } from "@hooks/date/useDate";
import { useGroup } from "@hooks/group/useGroup";
import { useRegisterCreditCard } from "@hooks/household/import_file/useRegisterCreditCard";
import { useRegisterDailyDetails } from "@hooks/household/import_file/useRegisterDailyDetails";
import { useUser } from "@hooks/user/useUser";
import { useUuid } from "@hooks/uuid/useUuid";
import { FileType } from "@provider/file/FileType";

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
  const { userId } = useUser();
  const { get } = useUuid();
  const { getNow } = useDate();
  const { groupId } = useGroup();
  const fileImportId = get();

  // Common table
  const [, createImportFileMutation] = useCreateImportFileHistoryMutation();

  const createImportFileVariables = {
    id: fileImportId,
    fileType: fileType,
    fileName: fileName,
    importUserId: userId,
    importDatetime: getNow(),
    groupId,
  };

  // Credit card Only
  const [, createCreditCardSummaryMutation] =
    useCreateCreditCardSummaryMutation();

  // Credit card Only
  const [, createCreditCardDetailMutation] =
    useCreateCreditCardDetailMutation();

  // Not credit card
  const [, createDailyDetailMutation] = useCreateDailyDetailMutation();

  return () => {
    createImportFileMutation(createImportFileVariables);

    setTimeout(
      RegistrationMap.get(fileType)!({
        createCreditCardSummaryMutation,
        createCreditCardDetailMutation,
        createDailyDetailMutation,
        summaryId: fileImportId,
        fileType,
        accountId,
        withdrawalDate,
        loadData,
        // TODO
        userId: userId ?? "",
        groupId,
        uuidList: loadData.map(() => get()),
      }),
      500,
    );
  };
};

export type RegistrationArgs = {
  createCreditCardSummaryMutation: (_: any) => Promise<any>;
  createCreditCardDetailMutation: (_: any) => Promise<any>;
  createDailyDetailMutation: (_: any) => Promise<any>;
  summaryId: string;
  fileType: FileType;
  accountId: string;
  withdrawalDate: Date;
  loadData: LoadFileProps[];
  userId: string;
  groupId: string;
  uuidList: string[];
};

const RegistrationMap = new Map<FileType, (_: RegistrationArgs) => () => void>([
  [FileType.AU_PAY_CSV, useRegisterCreditCard],
  [FileType.SMBC_CSV, useRegisterCreditCard],
  [FileType.OITA_BANK_CSV, useRegisterDailyDetails],
  [FileType.RAKUTEN_CARD_CSV, useRegisterCreditCard],
]);
