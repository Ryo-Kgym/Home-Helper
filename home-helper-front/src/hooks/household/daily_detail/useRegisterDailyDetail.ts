import { useCreateDailyDetailMutation } from "@graphql/postgraphile/generated/graphql";
import { loadUser } from "@hooks/loadUser";

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
  const userId = loadUser().getUserId;

  const [ignore, dailyRegistrationMutation] = useCreateDailyDetailMutation();

  const variables = {
    date: date,
    categoryId: categoryId,
    accountId: accountId,
    amount: amount,
    memo: memo,
    userId: userId,
  };

  return () => {
    dailyRegistrationMutation(variables);
  };
};
