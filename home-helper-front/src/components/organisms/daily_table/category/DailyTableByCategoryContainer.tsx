import { FC } from "react";
import { useGetDailyDetailByDateCategoryIdQuery } from "@graphql/postgraphile/generated/graphql";
import { TableProps } from "@components/atoms/Table";
import { DailyTableByCategoryPresenter } from "./DailyTableByCategoryPresenter";

type DailyTableByCategoryContainerProps = {
  date: Date;
  categoryId: string;
};
export const DailyTableByCategoryContainer: FC<
  DailyTableByCategoryContainerProps
> = ({ date, categoryId }) => {
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

  const [{ data }] = useGetDailyDetailByDateCategoryIdQuery({
    variables: {
      fromDate: firstDay,
      toDate: lastDay,
      categoryId: categoryId,
    },
  });

  const tableProps: TableProps[] =
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

  return <DailyTableByCategoryPresenter tableProps={tableProps} />;
};
