import {
  IocomeType,
  useGetDailyTotalByDateIocomeTypeQuery,
} from "@graphql/postgraphile/generated/graphql";

export const useGetAmountByDay = (date: Date) => {
  const [{ data: incomeTotal }, incomeRefetch] =
    useGetDailyTotalByDateIocomeTypeQuery({
      variables: {
        date: date.toISOString().slice(0, 10),
        iocomeType: IocomeType.Income,
      },
    });
  const [{ data: outcomeTotal }, outcomeRefetch] =
    useGetDailyTotalByDateIocomeTypeQuery({
      variables: {
        date: date.toISOString().slice(0, 10),
        iocomeType: IocomeType.Outcome,
      },
    });

  const income = incomeTotal?.dailyTotalViewByDateIocomeTypeList?.[0];
  const outcome = outcomeTotal?.dailyTotalViewByDateIocomeTypeList?.[0];

  const refetch = () => {
    incomeRefetch({ requestPolicy: "network-only" });
    outcomeRefetch({ requestPolicy: "network-only" });
  };

  return {
    income: income == null ? undefined : Number(income.total),
    outcome: outcome == null ? undefined : Number(outcome.total),
    refetch,
  };
};
