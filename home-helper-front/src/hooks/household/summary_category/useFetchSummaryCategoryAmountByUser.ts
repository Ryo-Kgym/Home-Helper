import { useGetSummaryCategoryByUserBetweenDateQuery } from "@graphql/postgraphile/generated/graphql";
import { useUser } from "@hooks/user/useUser";
import {
  TotalAmountByMonthly,
  totalAmountByMonthly,
  TotalAmountByMonthlyArgs,
} from "@function/monthly/totalAmountByMonthly";
import { IocomeType } from "@domain/model/household/IocomeType";

type Args = {
  fromMonth: Date;
  toMonth: Date;
};

type InterfaceType = (args: Args) => {
  data: TotalAmountByMonthly<MonthlyCategoryKey>[];
};

export const useFetchSummaryCategoryAmountByUser: InterfaceType = ({
  fromMonth,
  toMonth,
}) => {
  const { userId } = useUser();

  const [{ data }] = useGetSummaryCategoryByUserBetweenDateQuery({
    variables: {
      userId,
      fromDate: fromMonth!.toISOString().slice(0, 10),
      toDate: toMonth!.toISOString().slice(0, 10),
    },
  });

  const args: TotalAmountByMonthlyArgs<MonthlyCategoryKey>[] =
    data?.summaryCategoryList!.map((sc) => ({
      key: {
        categoryName: sc.category?.name!,
        iocomeType: sc.category?.genre?.iocomeType!,
      },
      list: (
        sc.category?.daily.map((d) => ({
          month: d.date.slice(0, 7) as string,
          amount: Number(d.amount),
        })) ?? []
      ).concat(
        sc.category?.creditCard.map((cc) => ({
          key: {
            categoryName: sc.category?.name!,
            iocomeType: sc.category?.genre?.iocomeType!,
          },
          month: cc.date.slice(0, 7) as string,
          amount: Number(cc.amount),
        })) ?? []
      ),
      fromDate: fromMonth,
      toDate: toMonth,
    })) ?? [];

  return { data: args.map((a) => totalAmountByMonthly(a)) };
};

export type MonthlyCategoryKey = {
  categoryName: string;
  iocomeType: IocomeType;
};
