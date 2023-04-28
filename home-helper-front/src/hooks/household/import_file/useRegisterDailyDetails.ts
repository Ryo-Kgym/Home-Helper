/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { RegistrationArgs } from "@hooks/household/import_file/useCreateImportFile";

/**
 * Package Private
 */
export const useRegisterDailyDetails = ({
  createDailyDetailMutation,
  accountId,
  loadData,
  userId,
  groupId,
  uuidList,
}: RegistrationArgs) => {
  const createDailyDetailVariableList = loadData.map((data, idx) => ({
    id: uuidList[idx],
    date: data.date,
    categoryId: data.categoryId!,
    accountId: accountId,
    amount: data.price,
    memo: data.note,
    userId,
    groupId,
  }));

  return () => {
    createDailyDetailVariableList.map((variable) =>
      setTimeout(() => {
        createDailyDetailMutation(variable);
      }, 100)
    );
  };
};
