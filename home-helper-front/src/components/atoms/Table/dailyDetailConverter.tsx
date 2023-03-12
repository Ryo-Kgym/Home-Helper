import { GetDailyDetailByDateQuery } from "@graphql/postgraphile/generated/graphql";
import { FormatPrice } from "@components/molecules/FormatPrice";
import { TableProps } from "@components/atoms/Table/index";

export const dailyDetailConverter = (
  data: GetDailyDetailByDateQuery | undefined
): TableProps[] => {
  return (
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
            value: (
              <FormatPrice
                price={dailyDetail?.amount!}
                iocomeType={
                  dailyDetail?.categoryByCategoryId?.genreByGenreId?.iocomeType!
                }
              />
            ),
            align: "right",
          },
          { value: dailyDetail?.memo },
        ],
      };
    }) ?? []
  );
};
