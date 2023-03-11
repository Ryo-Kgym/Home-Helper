import {
  IocomeType,
  useGetDailyTotalByDateIocomeTypeQuery,
} from "@graphql/postgraphile/generated/graphql";

export const useGetAmountByDay = (date: Date) => {
  const [incomeTotal] = useGetDailyTotalByDateIocomeTypeQuery({
    variables: {
      date: date.toISOString().slice(0, 10),
      iocomeType: IocomeType.Income,
    },
  });
  const [outcomeTotal] = useGetDailyTotalByDateIocomeTypeQuery({
    variables: {
      date: date.toISOString().slice(0, 10),
      iocomeType: IocomeType.Outcome,
    },
  });

  const income = incomeTotal.data?.dailyTotalViewByDateIocomeTypeList?.[0];
  const outcome = outcomeTotal.data?.dailyTotalViewByDateIocomeTypeList?.[0];

  return {
    income: income == null ? undefined : Number(income.total),
    outcome: outcome == null ? undefined : Number(outcome.total),
  };
};
