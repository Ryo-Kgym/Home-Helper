import { useGetCategoryTotalByMonthQuery } from "@graphql/postgraphile/generated/graphql";

export const useGetCategoryTotalByMonth = (fromMonth: Date, toMonth: Date) => {
  const firstDay = new Date(fromMonth.getFullYear(), fromMonth.getMonth(), 1);
  const lastDay = new Date(toMonth.getFullYear(), toMonth.getMonth() + 1, 0);

  return useGetCategoryTotalByMonthQuery({
    variables: {
      fromDate: firstDay.toISOString(),
      toDate: lastDay.toISOString(),
    },
  });
};
