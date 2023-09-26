import { useGetAccountBalanceListQuery } from "@graphql/hasura/generated/hasuraGraphql";
import { useGroup } from "@hooks/group/useGroup";

export const useGetAccountBalanceList = (
  fromDate: Date | null,
  toDate: Date
) => {
  const { groupId } = useGroup();
  const [{ data, fetching, error }] = useGetAccountBalanceListQuery({
    variables: {
      fromDate: fromDate ?? new Date(0),
      toDate,
      groupId,
    },
  });

  const total = data?.accountTotal?.reduce((acc, cur) => {
    return acc + Number(cur?.total);
  }, 0);

  return { data, fetching, error, total };
};
