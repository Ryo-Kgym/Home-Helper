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
  const [detailSerialNo, setDetailSerialNo] = useState<number | null>(null);

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
          setDetailSerialNo(detail.serialNo);
          setOpened(true);
        },
      })
    ) ?? [];

  useEffect(() => {
    refetch({ requestPolicy: "network-only" });
  }, []);

  return (
    <CreditCardDetailTablePresenter
      tableProps={tableProps}
      opened={isOpen}
      onClose={() => {
        setOpened(false);
      }}
      detailSerialNo={detailSerialNo}
    />
  );
};
