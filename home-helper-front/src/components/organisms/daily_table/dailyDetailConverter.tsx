import { GetDailyDetailByDateQuery } from "@graphql/postgraphile/generated/graphql";
import { FormatPrice } from "@components/molecules/FormatPrice";
import { TableProps } from "@components/atoms/Table/";

type dailyDetailConverterArgs = {
  data: GetDailyDetailByDateQuery | undefined;
  onClickHandler?: (id: string) => void;
};
export const dailyDetailConverter = ({
  data,
  onClickHandler = () => {},
}: dailyDetailConverterArgs): TableProps[] => {
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
        onClick: () => {
          onClickHandler(dailyDetail?.id!);
        },
      };
    }) ?? []
  );
};
