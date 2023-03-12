import { useGetAccountBalanceListQuery } from "@graphql/postgraphile/generated/graphql";

export const useGetAccountBalanceList = (
  fromDate: Date | null,
  toDate: Date
) => {
  const [{ data, fetching, error }] = useGetAccountBalanceListQuery({
    variables: {
      fromDate: fromDate ?? new Date(0),
      toDate: toDate,
    },
  });

  const total = data?.accountTotalList?.reduce((acc, cur) => {
    return acc + Number(cur?.total);
  }, 0);

  return { data, fetching, error, total };
};
