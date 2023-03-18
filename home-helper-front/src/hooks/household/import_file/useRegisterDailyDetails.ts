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
}: RegistrationArgs) => {
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
