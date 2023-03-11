import { useGetCategoryTotalByMonthQuery } from "@graphql/postgraphile/generated/graphql";

export const useGetCategoryTotalByMonth = (date: Date) => {
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

  return useGetCategoryTotalByMonthQuery({
    variables: {
      fromDate: firstDay.toISOString(),
      toDate: lastDay.toISOString(),
    },
  });
};
