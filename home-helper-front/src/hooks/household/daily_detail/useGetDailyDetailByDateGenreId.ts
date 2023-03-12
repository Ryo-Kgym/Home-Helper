import { useGetDailyDetailByDateGenreIdQuery } from "@graphql/postgraphile/generated/graphql";
import { IocomeType } from "@domain/model/household/IocomeType";

export const useGetDailyDetailByDateGenreId = (
  genreId: string,
  fromDate: Date | null,
  toDate: Date | null
) => {
  const [{ data, fetching, error }] = useGetDailyDetailByDateGenreIdQuery({
    variables: {
      genreId: genreId,
      fromDate: fromDate,
      toDate: toDate,
    },
  });

  const incomeTotal = calcTotal(data, IocomeType.Income);
  const outcomeTotal = calcTotal(data, IocomeType.Outcome);

  return {
    data,
    fetching,
    error,
    incomeTotal,
    outcomeTotal,
  };
};

const calcTotal = (data: any, iocomeType: IocomeType): number | undefined => {
  return data?.allCategoriesList
    ?.flatMap((category: any) => {
      return category.dailyDetailsByCategoryIdList
        .filter(
          (dailyDetail: any) =>
            dailyDetail.categoryByCategoryId?.genreByGenreId?.iocomeType ===
            iocomeType
        )
        .reduce((acc: number, cur: any) => acc + Number(cur.amount), 0);
    })
    .reduce((acc: number, cur: number) => acc + cur, 0);
};
