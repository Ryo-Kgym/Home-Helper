import { useGetSummaryCategoryByUserBetweenDateQuery } from "@graphql/postgraphile/generated/graphql";
import { useUser } from "@hooks/user/useUser";
import {
  TotalAmountByMonthly,
  totalAmountByMonthly,
  TotalAmountByMonthlyArgs,
} from "@function/monthly/totalAmountByMonthly";
import { IocomeType } from "@domain/model/household/IocomeType";

type Args = {
  year: number;
};

type InterfaceType = (args: Args) => {
  data: TotalAmountByMonthly<MonthlyCategoryKey>[];
};

export const useFetchSummaryCategoryAmountByUser: InterfaceType = ({
  year,
}) => {
  const { userId } = useUser();
  const fromDate = new Date(year, 0, 1);
  const toDate = new Date(year, 11, 31);
  const [{ data }] = useGetSummaryCategoryByUserBetweenDateQuery({
    variables: {
      userId,
      fromDate: fromDate.toISOString().slice(0, 10),
      toDate: toDate.toISOString().slice(0, 10),
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
          month: d.date.slice(5, 7) as string,
          amount: Number(d.amount),
        })) ?? []
      ).concat(
        sc.category?.creditCard.map((cc) => ({
          key: {
            categoryName: sc.category?.name!,
            iocomeType: sc.category?.genre?.iocomeType!,
          },
          month: cc.date.slice(5, 7) as string,
          amount: Number(cc.amount),
        })) ?? []
      ),
      fromDate,
      toDate,
    })) ?? [];

  return { data: args.map((a) => totalAmountByMonthly(a)) };
};

export type MonthlyCategoryKey = {
  categoryName: string;
  iocomeType: IocomeType;
};
