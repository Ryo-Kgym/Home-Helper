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
  incomeTotal: TotalAmountByMonthly<MonthlyCategoryKey>;
  outcomeTotal: TotalAmountByMonthly<MonthlyCategoryKey>;
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

  const monthlyTotalByCategory = args.map((a) => totalAmountByMonthly(a));
  const size = monthlyTotalByCategory[0]?.monthlyTotal.length ?? 0;
  const defaultMonthlyTotal = new Array<number>(size).fill(0);

  const incomeTotal: TotalAmountByMonthly<MonthlyCategoryKey> =
    monthlyTotalByCategory
      .filter((d) => d.key.iocomeType === IocomeType.Income)
      .reduce(
        (a, b) => ({
          key: { categoryName: "収入", iocomeType: IocomeType.Income },
          monthlyTotal: a.monthlyTotal.map((v, i) => v + b.monthlyTotal[i]),
          total: a.total + b.total,
        }),
        {
          key: { categoryName: "収入", iocomeType: IocomeType.Income },
          monthlyTotal: defaultMonthlyTotal,
          total: 0,
        }
      );

  const outcomeTotal: TotalAmountByMonthly<MonthlyCategoryKey> =
    monthlyTotalByCategory
      .filter((d) => d.key.iocomeType === IocomeType.Outcome)
      .reduce(
        (a, b) => ({
          key: { categoryName: "支出", iocomeType: IocomeType.Outcome },
          monthlyTotal: a.monthlyTotal.map((v, i) => v + b.monthlyTotal[i]),
          total: a.total + b.total,
        }),
        {
          key: { categoryName: "支出", iocomeType: IocomeType.Outcome },
          monthlyTotal: defaultMonthlyTotal,
          total: 0,
        }
      );

  return {
    data: monthlyTotalByCategory,
    incomeTotal,
    outcomeTotal,
  };
};

export type MonthlyCategoryKey = {
  categoryName: string;
  iocomeType: IocomeType;
};
