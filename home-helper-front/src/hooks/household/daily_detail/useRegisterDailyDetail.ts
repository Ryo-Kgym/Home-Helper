import { useCreateDailyDetailMutation } from "@graphql/postgraphile/generated/graphql";
import { useDate } from "@hooks/date/useDate";
import { useUser } from "@hooks/user/useUser";

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
  const { convertToFull } = useDate();

  const [ignore, dailyRegistrationMutation] = useCreateDailyDetailMutation();

  const variables = {
    date: convertToFull(date),
    categoryId: categoryId,
    accountId: accountId,
    amount: amount,
    memo: memo,
    userId,
  };

  return () => {
    dailyRegistrationMutation(variables);
  };
};
