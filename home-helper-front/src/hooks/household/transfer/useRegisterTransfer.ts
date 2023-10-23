/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { useUser } from "@hooks/user/useUser";
import { useGroup } from "@hooks/group/useGroup";
import { useDate } from "@hooks/date/useDate";
import { useUuid } from "@hooks/uuid/useUuid";
import {
  useCreateDailyDetailMutation,
  useGetTransferCategoryByQuery,
} from "@graphql/hasura/generated/hasuraGraphql";

export const useRegisterTransfer = ({
  date,
  sendAccountId,
  receiveAccountId,
  amount,
  memo,
}: {
  date: Date;
  sendAccountId: string;
  receiveAccountId: string;
  amount: number;
  memo?: string;
}) => {
  const { userId } = useUser();
  const { groupId } = useGroup();
  const { convertToFull } = useDate();
  const { get } = useUuid();

  const [{ data }] = useGetTransferCategoryByQuery({
    variables: {
      groupId,
    },
  });
  const [, dailyRegistrationMutation] = useCreateDailyDetailMutation();

  const _registerDaily = async ({
    accountId,
    categoryId,
  }: {
    accountId: string;
    categoryId: string;
  }) =>
    dailyRegistrationMutation({
      accountId: accountId,
      amount: amount,
      categoryId: categoryId,
      date: convertToFull(date),
      groupId,
      id: get(),
      memo: memo,
      userId,
    });

  const registerTransfer = async () => {
    try {
      await _registerDaily({
        accountId: sendAccountId,
        categoryId: data?.transferCategory?.outcomeCategoryId,
      });
      await _registerDaily({
        accountId: receiveAccountId,
        categoryId: data?.transferCategory?.incomeCategoryId,
      });
    } catch (e) {
      throw e;
    }
  };

  return {
    registerTransfer,
  };
};
