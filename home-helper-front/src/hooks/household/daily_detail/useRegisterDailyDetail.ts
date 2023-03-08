import {
  useCreateDailyDetailMutation,
  useGetTotalByAccountIdQuery,
  useUpdateAccountBalanceMutation,
} from "@graphql/postgraphile/generated/graphql";
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

  const [ignore1, dailyRegistrationMutation] = useCreateDailyDetailMutation();
  const [{ data }] = useGetTotalByAccountIdQuery({
    variables: {
      accountId: accountId,
    },
  });
  const totalByAccountId: number =
    data?.totalByAccountIdList?.reduce((acc: number, val): number => {
      return acc + val?.total ?? 0;
    }, 0) ?? 0;
  const [ignore2, accountBalanceUpdateMutation] =
    useUpdateAccountBalanceMutation();

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
    accountBalanceUpdateMutation({
      accountId: accountId,
      balance: totalByAccountId,
    });
    console.log(variables);
  };
};
