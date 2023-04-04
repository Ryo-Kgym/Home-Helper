/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { FileType } from "@provider/file/FileType";
import { RegistrationArgs } from "@hooks/household/import_file/useCreateImportFile";

/**
 * Package Private
 */
export const useRegisterCreditCard = ({
  createCreditCardSummaryMutation,
  createCreditCardDetailMutation,
  uuid,
  fileType,
  accountId,
  withdrawalDate,
  loadData,
}: RegistrationArgs) => {
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
    setTimeout(() => {
      detailVariableList.map((variable) =>
        createCreditCardDetailMutation(variable)
      );
    }, 100);
  };
};

const CreditCardMap = new Map<FileType, string>([
  [FileType.AU_PAY_CSV, "AU_PAY_CARD"],
  [FileType.SMBC_CSV, "AMAZON_CARD"],
]);
