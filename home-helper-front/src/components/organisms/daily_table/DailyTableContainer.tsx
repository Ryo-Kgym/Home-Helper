import { FC, useState } from "react";
import { DailyTablePresenter } from "./DailyTablePresenter";
import { useGetDailyDetailByDateQuery } from "@graphql/postgraphile/generated/graphql";
import { TableProps } from "@components/atoms/Table";

type DailyTableContainerProps = {};
export const DailyTableContainer: FC<DailyTableContainerProps> = () => {
  const [fromDate, setFromDate] = useState<Date | null>(new Date());
  const [toDate, setToDate] = useState<Date | null>(new Date());

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
          { value: dailyDetail?.date },
          {
            value: dailyDetail?.categoryByCategoryId?.genreByGenreId?.genreName,
          },
          { value: dailyDetail?.categoryByCategoryId?.categoryName },
          { value: dailyDetail?.accountByAccountId?.accountName },
          { value: dailyDetail?.amount?.toLocaleString() },
          { value: dailyDetail?.memo },
        ],
      };
    }) ?? [];
  return <DailyTablePresenter tablePropsList={dailyDetail} />;
};
