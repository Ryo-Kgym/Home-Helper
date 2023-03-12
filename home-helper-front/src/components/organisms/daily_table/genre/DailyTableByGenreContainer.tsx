import { FC } from "react";
import { TableProps } from "@components/atoms/Table";
import { DailyTableByGenrePresenter } from "./DailyTableByGenrePresenter";
import { useGetDailyDetailByDateGenreId } from "@hooks/household/daily_detail/useGetDailyDetailByDateGenreId";
import { getLabel } from "@domain/model/household/IocomeType";
import { FormatPrice } from "@components/molecules/FormatPrice";

type DailyTableByGenreContainerProps = {
  fromMonth: Date;
  toMonth: Date;
  genreId: string;
};
export const DailyTableByGenreContainer: FC<
  DailyTableByGenreContainerProps
> = ({ fromMonth, toMonth, genreId }) => {
  const firstDay = new Date(fromMonth.getFullYear(), fromMonth.getMonth(), 1);
  const lastDay = new Date(toMonth.getFullYear(), toMonth.getMonth() + 1, 0);

  const { data, incomeTotal, outcomeTotal } = useGetDailyDetailByDateGenreId(
    genreId,
    firstDay,
    lastDay
  );

  const tableProps: TableProps[] =
    data?.allCategoriesList?.flatMap((category) => {
      return category.dailyDetailsByCategoryIdList.flatMap((dailyDetail) => {
        return {
          keyPrefix: "dailyDetail",
          columns: [
            {
              value: getLabel(
                dailyDetail.categoryByCategoryId?.genreByGenreId?.iocomeType!
              ),
              align: "center",
            },
            {
              value:
                dailyDetail.categoryByCategoryId?.genreByGenreId?.genreName,
            },
            {
              value: dailyDetail.categoryByCategoryId?.categoryName,
            },
            {
              value: dailyDetail.accountByAccountId?.accountName,
            },
            {
              value: (
                <FormatPrice
                  price={dailyDetail.amount!}
                  iocomeType={
                    dailyDetail.categoryByCategoryId?.genreByGenreId
                      ?.iocomeType!
                  }
                />
              ),
              align: "right",
            },
            {
              value: dailyDetail.memo,
            },
          ],
        };
      });
    }) ?? [];

  return (
    <DailyTableByGenrePresenter
      firstDay={firstDay}
      lastDay={lastDay}
      tableProps={tableProps}
      incomeTotal={incomeTotal}
      outcomeTotal={outcomeTotal}
    />
  );
};
