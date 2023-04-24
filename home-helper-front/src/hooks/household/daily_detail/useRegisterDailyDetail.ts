import { useCreateDailyDetailMutation } from "@graphql/postgraphile/generated/graphql";
import { useDate } from "@hooks/date/useDate";
import { useUser } from "@hooks/user/useUser";
import { useUuid } from "@hooks/uuid/useUuid";
import { useGroup } from "@hooks/group/useGroup";

type DailyDetailForRegistration = {
  date: Date;
  categoryId: string;
  accountId: string;
  amount: number;
  memo?: string;
};

export const useRegisterDailyDetail = ({
  date,
  categoryId,
  accountId,
  amount,
  memo,
}: DailyDetailForRegistration) => {
  const { userId } = useUser();
  const { groupId } = useGroup();
  const { convertToFull } = useDate();
  const { get } = useUuid();

  const [ignore, dailyRegistrationMutation] = useCreateDailyDetailMutation();

  const variables = {
    id: get(),
    date: convertToFull(date),
    categoryId: categoryId,
    accountId: accountId,
    amount: amount,
    memo: memo,
    userId,
    groupId,
  };

  return () => {
    dailyRegistrationMutation(variables);
  };
};
