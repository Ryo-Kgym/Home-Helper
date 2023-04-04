import { useGetCreditCardSummaryBetweenWithdrawalDateQuery } from "@graphql/postgraphile/generated/graphql";

export const useGetCreditCardSummaryBetweenDate = (
  fromDate: Date | null,
  toDate: Date | null
) => {
  const [{ data, fetching, error }, refetch] =
    useGetCreditCardSummaryBetweenWithdrawalDateQuery({
      variables: {
        fromDate,
        toDate,
      },
    });

  const incomeTotal = 0;
  const outcomeTotal = data?.allCreditCardSummariesList?.reduce(
    (a, b) => a + Number(b!.totalAmount!),
    0
  );

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
