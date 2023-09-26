/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { RegistrationArgs } from "@hooks/household/import_file/useCreateImportFile";
import { FileType } from "@provider/file/FileType";

/**
 * Package Private
 */
export const useRegisterCreditCard = ({
  createCreditCardSummaryMutation,
  createCreditCardDetailMutation,
  summaryId,
  fileType,
  accountId,
  withdrawalDate,
  loadData,
  userId,
  groupId,
  uuidList,
}: RegistrationArgs) => {
  const summaryVariableList = {
    id: summaryId,
    creditCard: CreditCardMap.get(fileType) || "other",
    accountId: accountId,
    totalAmount: loadData.reduce((acc, cur) => acc + cur.price, 0),
    count: loadData.length,
    withdrawalDate: withdrawalDate,
    groupId,
  };

  const detailVariableList = loadData.map((data, idx) => ({
    id: uuidList[idx],
    date: data.date,
    categoryId: data.categoryId!,
    amount: data.price,
    memo: data.note,
    summaryId,
    userId,
    groupId,
  }));

  return async () => {
    try {
      await createCreditCardSummaryMutation(summaryVariableList);

      for (const detailVariable of detailVariableList) {
        await createCreditCardDetailMutation(detailVariable);
      }
    } catch (e) {
      console.error(e);
    }
  };
};

const CreditCardMap = new Map<FileType, string>([
  [FileType.AU_PAY_CSV, "AU_PAY_CARD"],
  [FileType.SMBC_CSV, "AMAZON_CARD"],
  [FileType.RAKUTEN_CARD_CSV, "RAKUTEN_CARD"],
]);
