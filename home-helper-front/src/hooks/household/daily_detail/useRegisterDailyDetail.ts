import { useCreateDailyDetailMutation } from "@graphql/postgraphile/generated/graphql";
import { loadUserId } from "@hooks/loadUserId";

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
  const userId = loadUserId();

  const [result, mutation] = useCreateDailyDetailMutation();

  const variables = {
    date: date,
    categoryId: categoryId,
    accountId: accountId,
    amount: amount,
    memo: memo,
    userId: userId,
  };

  return () => {
    mutation(variables);
    console.log(variables);
  };
};
