/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { FC } from "react";
import { TableProps } from "@components/atoms/Table";
import { DailyTableByGenrePresenter } from "./DailyTableByGenrePresenter";
import { useGetDailyDetailByDateGenreId } from "@hooks/household/daily_detail/useGetDailyDetailByDateGenreId";
import { FormatPrice } from "@components/molecules/FormatPrice";
import { useDate } from "@hooks/date/useDate";
import { IocomeType } from "@domain/model/household/IocomeType";

type DailyTableByGenreContainerProps = {
  fromMonth: Date;
  toMonth: Date;
  genreId: string;
};
export const DailyTableByGenreContainer: FC<
  DailyTableByGenreContainerProps
> = ({ fromMonth, toMonth, genreId }) => {
  const { offsetDate } = useDate();
  const firstDay = offsetDate(
    new Date(fromMonth.getFullYear(), fromMonth.getMonth(), 1),
  );
  const lastDay = offsetDate(
    new Date(toMonth.getFullYear(), toMonth.getMonth() + 1, 0),
  );

  const { data, incomeTotal, outcomeTotal } = useGetDailyDetailByDateGenreId(
    genreId,
    firstDay,
    lastDay,
  );

  const tableProps: TableProps[] =
    data?.allCategoriesList?.flatMap((category) => {
      return category.dailyDetailsByCategoryIdList.flatMap((dailyDetail) => ({
        keyPrefix: "dailyDetail",
        columns: [
          {
            value: dailyDetail.date,
            align: "center",
          },
          {
            value: (
              <div>
                <div className={"text-xs text-gray-500"}>
                  {dailyDetail?.categoryByCategoryId?.genreByGenreId?.genreName}
                </div>
                <div>{dailyDetail?.categoryByCategoryId?.categoryName}</div>
              </div>
            ),
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
                    ?.iocomeType! as IocomeType
                }
              />
            ),
            align: "right",
          },
          {
            value: dailyDetail.memo,
          },
        ],
      }));
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
