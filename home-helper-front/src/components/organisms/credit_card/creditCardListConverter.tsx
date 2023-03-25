import { FormatPrice } from "@components/molecules/FormatPrice";
import { IocomeType } from "@domain/model/household/IocomeType";
import { GetCreditCardListQuery } from "@graphql/postgraphile/generated/graphql";
import { TableProps } from "@components/atoms/Table";
import { CreditCardDetail } from "@domain/model/household/CreditCardDetail";

type creditCardListConverterArgs = {
  data: GetCreditCardListQuery | undefined;
  setDetailProps: (tableProps: TableProps[]) => void;
  setDetail: (detail: CreditCardDetail | null) => void;
  setOpened: (opened: boolean) => void;
};
export const creditCardListConverter = ({
  data,
  setDetailProps,
  setDetail,
  setOpened,
}: creditCardListConverterArgs): TableProps[] =>
  data?.allCreditCardSummariesList?.map((creditCard) => ({
    keyPrefix: "creditCard",
    columns: [
      { value: creditCard.withdrawalDate, align: "center" },
      { value: creditCard.creditCard, align: "center" },
      {
        value: creditCard.accountByAccountId?.accountName,
      },
      {
        value: (
          <FormatPrice
            price={creditCard.totalAmount}
            iocomeType={IocomeType.Outcome}
          />
        ),
        align: "right",
      },
    ],
    onClick: () => {
      setDetailProps(
        creditCard.creditCardDetailsBySummaryIdList?.map((detail) => ({
          keyPrefix: "creditCardDetail",
          columns: [
            { value: detail.date, align: "center" },
            {
              value: detail.categoryByCategoryId?.genreByGenreId?.genreName,
            },
            { value: detail.categoryByCategoryId?.categoryName },
            {
              value: (
                <FormatPrice
                  iocomeType={
                    detail.categoryByCategoryId?.genreByGenreId?.iocomeType!
                  }
                  price={detail.amount}
                />
              ),
              align: "right",
            },
            { value: detail.memo },
          ],
          onClick: () => {
            setDetail({
              serialNo: detail.serialNo,
              date: new Date(detail.date),
              amount: Number(detail.amount) as number | "",
              iocomeType:
                detail.categoryByCategoryId?.genreByGenreId?.iocomeType,
              genreId: detail.categoryByCategoryId?.genreByGenreId?.genreId,
              categoryId: detail.categoryByCategoryId?.categoryId,
              memo: detail.memo,
            } as CreditCardDetail);
            setOpened(true);
          },
        }))
      );
    },
  })) ?? [];
