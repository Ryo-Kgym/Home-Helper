/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { useCreateDailyDetailMutation } from "@graphql/hasura/generated/hasuraGraphql";
import { useDate } from "@hooks/date/useDate";
import { useUser } from "@hooks/user/useUser";
import { useUuid } from "@hooks/uuid/useUuid";
import { useGroup } from "@hooks/group/useGroup";
import { IocomeType } from "@domain/model/household/IocomeType";

type DailyDetailForRegistration = {
  date: Date;
  genreId: string;
  iocomeType: IocomeType;
  categoryId: string;
  accountId: string;
  amount: number;
  memo?: string;
};

export const useRegisterDailyDetail = ({
  date,
  genreId,
  iocomeType,
  categoryId,
  accountId,
  amount,
  memo,
}: DailyDetailForRegistration) => {
  const { userId } = useUser();
  const { groupId } = useGroup();
  const { convertToFull } = useDate();
  const { get } = useUuid();

  const [, dailyRegistrationMutation] = useCreateDailyDetailMutation();

  const variables = {
    accountId: accountId,
    amount: amount,
    categoryId: categoryId,
    genreId,
    iocomeType,
    date: convertToFull(date),
    groupId,
    id: get(),
    memo: memo,
    userId,
  };

  const registerHandler = async () =>
    await dailyRegistrationMutation(variables);

  return {
    registerHandler,
  };
};
