import { useGetSummaryCategoryByUserBetweenDateQuery } from "@graphql/postgraphile/generated/graphql";
import { useUser } from "@hooks/user/useUser";
import {
  TotalAmountByMonthly,
  totalAmountByMonthly,
  TotalAmountByMonthlyArgs,
} from "@function/monthly/totalAmountByMonthly";

type Args = {
  fromDate: Date;
  toDate: Date;
};

type InterfaceType = (args: Args) => {
  data: TotalAmountByMonthly<string>[];
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

  const args: TotalAmountByMonthlyArgs<string>[] =
    data?.summaryCategory!.flatMap((sc) =>
      (
        sc.category?.daily.map((d) => {
          return {
            key: sc.category!.name as string,
            month: d.date.slice(5, 7) as string,
            amount: d.amount as number,
          };
        }) ?? []
      ).concat(
        sc.category?.creditCard.map((cc) => {
          return {
            key: sc.category!.name as string,
            month: cc.date.slice(5, 7) as string,
            amount: cc.amount as number,
          };
        }) ?? []
      )
    ) ?? [];

  return { data: args.map((a) => totalAmountByMonthly(a)) };
};
