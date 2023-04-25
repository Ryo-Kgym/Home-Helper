import { useGetSummaryCategoryByUserBetweenDateQuery } from "@graphql/postgraphile/generated/graphql";
import { useUser } from "@hooks/user/useUser";

type Args = {
  fromDate: Date;
  toDate: Date;
};

type InterfaceType = (args: Args) => {
  data: any;
};

export const useFetchSummaryCategoryAmountByUser: InterfaceType = ({
  fromDate,
  toDate,
}) => {
  const { userId } = useUser();
  const [{ data }] = useGetSummaryCategoryByUserBetweenDateQuery({
    variables: {
      userId,
      fromDate: fromDate.toISOString().slice(0, 10),
      toDate: toDate.toISOString().slice(0, 10),
    },
  });

  return {
    data,
  };
};
