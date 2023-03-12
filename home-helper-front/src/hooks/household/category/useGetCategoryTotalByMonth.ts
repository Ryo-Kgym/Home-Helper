import { useGetCategoryTotalByMonthQuery } from "@graphql/postgraphile/generated/graphql";

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

  return useGetCategoryTotalByMonthQuery({
    variables: {
      fromDate: firstDay.toISOString(),
      toDate: lastDay.toISOString(),
    },
  });
};
