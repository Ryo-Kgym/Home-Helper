import { FormatPrice } from "@components/molecules/FormatPrice";
import { IocomeType } from "@domain/model/household/IocomeType";
import { GetCreditCardListQuery } from "@graphql/postgraphile/generated/graphql";
import { TableProps } from "@components/atoms/Table";

type creditCardListConverterArgs = {
  data: GetCreditCardListQuery | undefined;
  setDetailProps: (tableProps: TableProps[]) => void;
};
export const creditCardListConverter = ({
  data,
  setDetailProps,
}: creditCardListConverterArgs): TableProps[] => {
  return (
    data?.allCreditCardSummariesList?.map((c) => {
      return {
        keyPrefix: "creditCard",
        columns: [
          { value: c.withdrawalDate, align: "center" },
          { value: c.creditCard, align: "center" },
          {
            value: c.accountByAccountId?.accountName,
          },
          {
            value: (
              <FormatPrice
                price={c.totalAmount}
                iocomeType={IocomeType.Outcome}
              />
            ),
            align: "right",
          },
        ],
        onClick: () => {
          setDetailProps(
            c.creditCardDetailsBySummaryIdList?.map((d) => {
              return {
                keyPrefix: "creditCardDetail",
                columns: [
                  { value: d.date, align: "center" },
                  {
                    value: d.categoryByCategoryId?.genreByGenreId?.genreName,
                  },
                  { value: d.categoryByCategoryId?.categoryName },
                  {
                    value: (
                      <FormatPrice
                        iocomeType={
                          d.categoryByCategoryId?.genreByGenreId?.iocomeType!
                        }
                        price={d.amount}
                      />
                    ),
                    align: "right",
                  },
                  { value: d.memo },
                ],
              };
            })
          );
        },
      };
    }) ?? []
  );
};
