import { useGetDailyDetailByDateAccountIdQuery } from "@graphql/postgraphile/generated/graphql";
import { IocomeType } from "@domain/model/household/IocomeType";
import { useGroup } from "@hooks/group/useGroup";

export const useGetDailyDetailByDateAccountId = (
  accountId: string,
  fromDate: Date | null,
  toDate: Date | null
) => {
  const { groupId } = useGroup();

  const [{ data, fetching, error }] = useGetDailyDetailByDateAccountIdQuery({
    variables: {
      groupId,
      accountId,
      fromDate,
      toDate,
    },
  });

  const incomeTotal = data?.dailyDetailByDateList
    ?.filter(
      (c) =>
        c!.categoryByCategoryId!.genreByGenreId!.iocomeType ===
        IocomeType.Income
    )
    .reduce((a, b) => a + Number(b!.amount!), 0);

  const outcomeTotal = data?.dailyDetailByDateList
    ?.filter(
      (c) =>
        c!.categoryByCategoryId!.genreByGenreId!.iocomeType ===
        IocomeType.Outcome
    )
    .reduce((a, b) => a + Number(b!.amount!), 0);

  return { data, fetching, error, incomeTotal, outcomeTotal };
};
