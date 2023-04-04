import { useGetCategoryTotalByMonthQuery } from "@graphql/postgraphile/generated/graphql";
import { IocomeType } from "@domain/model/household/IocomeType";

export const useGetCategoryTotalByMonth = (
  fromMonth: Date | null,
  toMonth: Date | null
) => {
  const correctedFromMonth = fromMonth ?? new Date();
  const correctedToMonth = toMonth ?? new Date();

  const firstDay = new Date(
    correctedFromMonth.getFullYear(),
    correctedFromMonth.getMonth(),
    1
  );
  const lastDay = new Date(
    correctedToMonth.getFullYear(),
    correctedToMonth.getMonth() + 1,
    0
  );

  const [{ data, fetching, error }, refetch] = useGetCategoryTotalByMonthQuery({
    variables: {
      fromDate: firstDay.toISOString(),
      toDate: lastDay.toISOString(),
    },
  });

  const incomeTotal = data?.categoryTotalByMonthList
    ?.filter((c) => c!.iocomeType === IocomeType.Income)
    .reduce((a, b) => a + Number(b!.total!), 0);

  const outcomeTotal = data?.categoryTotalByMonthList
    ?.filter((c) => c!.iocomeType === IocomeType.Outcome)
    .reduce((a, b) => a + Number(b!.total!), 0);

  return {
    data,
    fetching,
    error,
    refetch: () => {
      refetch({ requestPolicy: "network-only" });
    },
    incomeTotal,
    outcomeTotal,
  };
};
