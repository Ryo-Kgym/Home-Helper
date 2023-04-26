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
    data?.summaryCategoryList!.map((sc) => ({
      key: sc.category?.name!,
      list: (
        sc.category?.daily.map((d) => ({
          month: d.date.slice(5, 7) as string,
          amount: Number(d.amount),
        })) ?? []
      ).concat(
        sc.category?.creditCard.map((cc) => ({
          month: cc.date.slice(5, 7) as string,
          amount: Number(cc.amount),
        })) ?? []
      ),
    })) ?? [];

  return { data: args.map((a) => totalAmountByMonthly(a)) };
};
