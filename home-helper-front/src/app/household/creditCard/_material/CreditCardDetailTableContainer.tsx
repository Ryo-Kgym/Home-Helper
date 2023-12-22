/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { TableProps } from "@components/atoms/Table/index";
import { FormatPrice } from "@components/molecules/FormatPrice/index";
import { useGetCreditCardDetailBySummaryIdQuery } from "@graphql/hasura/generated/hasuraGraphql";
import { useState } from "react";
import { CreditCardDetailTablePresenter } from "./CreditCardDetailTablePresenter";
import { IocomeType } from "@domain/model/household/IocomeType";

type CreditCardDetailTableContainerProps = {
  creditCardSummaryId: string;
};
export const CreditCardDetailTableContainer = ({
  creditCardSummaryId,
}: CreditCardDetailTableContainerProps) => {
  const [isOpen, setOpened] = useState(false);
  const [detailId, setDetailId] = useState<string | null>(null);

  const [{ data }] = useGetCreditCardDetailBySummaryIdQuery({
    variables: {
      id: creditCardSummaryId,
    },
  });

  const tableProps: TableProps[] =
    data?.creditCardSummaryByPk?.creditCardDetails.map((detail) => ({
      keyPrefix: "creditCardDetail",
      columns: [
        { value: detail.date, align: "center" },
        {
          value: detail.category?.genreByGenreId?.genreName,
        },
        { value: detail.category?.categoryName },
        {
          value: (
            <FormatPrice
              iocomeType={
                detail.category?.genreByGenreId?.iocomeType! as IocomeType
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
    })) ?? [];

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
