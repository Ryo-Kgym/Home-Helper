import { FC, useState } from "react";
import { CreditCardDetail } from "@domain/model/household/CreditCardDetail";
import { CreditCardDetailTablePresenter } from "@components/organisms/credit_card/CreditCardDetailTablePresenter";
import { useGetCreditCardDetailBySummaryIdQuery } from "@graphql/postgraphile/generated/graphql";
import { FormatPrice } from "@components/molecules/FormatPrice";
import { TableProps } from "@components/atoms/Table";

type CreditCardDetailTableContainerProps = {
  creditCardSummaryId: string;
};
export const CreditCardDetailTableContainer: FC<
  CreditCardDetailTableContainerProps
> = ({ creditCardSummaryId }) => {
  const [isOpen, setOpened] = useState(false);
  const [detail, setDetail] = useState<CreditCardDetail | null>(null);

  const [{ data }, refetch] = useGetCreditCardDetailBySummaryIdQuery({
    variables: {
      id: creditCardSummaryId,
    },
  });

  const tableProps: TableProps[] =
    data?.creditCardSummaryById?.creditCardDetailsBySummaryIdList.map(
      (detail) => ({
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
            iocomeType: detail.categoryByCategoryId?.genreByGenreId?.iocomeType,
            genreId: detail.categoryByCategoryId?.genreByGenreId?.genreId,
            categoryId: detail.categoryByCategoryId?.categoryId,
            memo: detail.memo,
          } as CreditCardDetail);
          setOpened(true);
        },
      })
    ) ?? [];

  return (
    <CreditCardDetailTablePresenter
      tableProps={tableProps}
      opened={isOpen}
      initData={detail}
      onClose={() => {
        setOpened(false);
        refetch({ requestPolicy: "network-only" });
      }}
    />
  );
};
