import { useGetCreditCardSummaryBetweenWithdrawalDateQuery } from "@graphql/postgraphile/generated/graphql";

export const useGetCreditCardSummaryBetweenMonth = (
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

  const [{ data, fetching, error }, refetch] =
    useGetCreditCardSummaryBetweenWithdrawalDateQuery({
      variables: {
        fromDate: firstDay.toISOString(),
        toDate: lastDay.toISOString(),
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
