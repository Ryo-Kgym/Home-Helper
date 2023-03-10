import { FC, useState } from "react";
import { DailyTablePresenter } from "./DailyTablePresenter";
import { useGetDailyDetailByDateQuery } from "@graphql/postgraphile/generated/graphql";
import { TableProps } from "@components/atoms/Table";

type DailyTableContainerProps = {};
export const DailyTableContainer: FC<DailyTableContainerProps> = () => {
  const today = new Date();
  const thisFirstDay = new Date(today.getFullYear(), today.getMonth(), 1);

  const [fromDate, setFromDate] = useState<Date | null>(thisFirstDay);
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
  return (
    <DailyTablePresenter
      fromDate={fromDate}
      changeFromDate={setFromDate}
      toDate={toDate}
      changeToDate={setToDate}
      tablePropsList={dailyDetail}
    />
  );
};
