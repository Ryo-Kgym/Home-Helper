import { FC, useState } from "react";
import { DailyTablePresenter } from "./DailyTablePresenter";
import { useGetDailyDetailByDateQuery } from "@graphql/postgraphile/generated/graphql";
import { TableProps } from "@components/atoms/Table";

type DailyTableContainerProps = {};
export const DailyTableContainer: FC<DailyTableContainerProps> = () => {
  const [fromDate, setFromDate] = useState<Date | null>(new Date("2023-03-01"));
  const [toDate, setToDate] = useState<Date | null>(new Date("2023-04-31"));

  const [{ data }] = useGetDailyDetailByDateQuery({
    variables: {
      fromDate: fromDate,
      toDate: toDate,
    },
  });

  const dailyDetail: TableProps[] =
    data?.dailyDetailByDateList?.map((dailyDetail) => {
      return {
        keyPrefix: "dailyDetail",
        columns: [
          { value: dailyDetail?.date, align: "center" },
          {
            value: dailyDetail?.categoryByCategoryId?.genreByGenreId?.genreName,
          },
          { value: dailyDetail?.categoryByCategoryId?.categoryName },
          { value: dailyDetail?.accountByAccountId?.accountName },
          {
            value: Number(dailyDetail?.amount!).toLocaleString(),
            align: "right",
          },
          { value: dailyDetail?.memo },
        ],
      };
    }) ?? [];
  return <DailyTablePresenter tablePropsList={dailyDetail} />;
};
