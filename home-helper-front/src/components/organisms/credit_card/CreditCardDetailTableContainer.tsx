import { FC, useEffect, useState } from "react";
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
  const [detailId, setDetailId] = useState<string | null>(null);

  const [{ data }] = useGetCreditCardDetailBySummaryIdQuery({
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
          setDetailId(detail.id);
          setOpened(true);
        },
      })
    ) ?? [];

  return (
    <CreditCardDetailTablePresenter
      tableProps={tableProps}
      opened={isOpen}
      onClose={() => {
        setOpened(false);
      }}
      detailId={detailId}
    />
  );
};
