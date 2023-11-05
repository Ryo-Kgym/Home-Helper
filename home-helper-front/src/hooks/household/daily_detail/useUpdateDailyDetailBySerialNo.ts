/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { useUpdateDailyDetailByIdMutation } from "@graphql/hasura/generated/hasuraGraphql";

type useUpdateDailyDetailBySerialNoArgs = {
  id: string;
  date: Date;
  categoryId: string;
  accountId: string;
  amount: number;
  memo: string | null;
};
export const useUpdateDailyDetailBySerialNo = ({
  id,
  date,
  categoryId,
  accountId,
  amount,
  memo,
}: useUpdateDailyDetailBySerialNoArgs) => {
  const [, updateMutation] = useUpdateDailyDetailByIdMutation();

  const updateHandler = async () =>
    await updateMutation({
      id,
      date,
      categoryId,
      accountId,
      amount,
      memo,
    });

  return {
    updateHandler,
  };
};
