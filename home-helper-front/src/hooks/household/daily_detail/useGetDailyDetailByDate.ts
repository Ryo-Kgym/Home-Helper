import { useGetDailyDetailByDateQuery } from "@graphql/postgraphile/generated/graphql";
import { IocomeType } from "@domain/model/household/IocomeType";

export const useGetDailyDetailByDate = (
  fromDate: Date | null,
  toDate: Date | null
) => {
  const [{ data, fetching, error }] = useGetDailyDetailByDateQuery({
    variables: {
      fromDate: fromDate,
      toDate: toDate,
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

  const getDailyDetail = (serialNo: number): DailyDetail => {
    const dailyDetail = data?.dailyDetailByDateList?.find(
      (e) => e!.serialNo === serialNo
    );

    return {
      date: new Date(dailyDetail?.date),
      amount: Number(dailyDetail?.amount) ?? "",
      iocomeType:
        dailyDetail?.categoryByCategoryId?.genreByGenreId?.iocomeType ?? null,
      genreId:
        dailyDetail?.categoryByCategoryId?.genreByGenreId?.genreId ?? null,
      categoryId: dailyDetail?.categoryByCategoryId?.categoryId ?? null,
      accountId: dailyDetail?.accountByAccountId?.accountId ?? null,
      memo: dailyDetail?.memo ?? null,
    };
  };

  return {
    data,
    fetching,
    error,
    incomeTotal,
    outcomeTotal,
    getDetail: getDailyDetail,
  };
};

export type DailyDetail = {
  date: Date | null;
  amount: number | "";
  iocomeType: IocomeType | null;
  genreId: string | null;
  categoryId: string | null;
  accountId: string | null;
  memo: string | null;
};
