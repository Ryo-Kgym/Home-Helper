/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { TableProps } from "@components/atoms/Table";
import { FormatPrice } from "@components/molecules/FormatPrice";
import { useGetCreditCardDetailBySummaryIdQuery } from "@graphql/hasura/generated/hasuraGraphql";
import { useState } from "react";
import { CreditCardDetailTablePresenter } from "./CreditCardDetailTablePresenter";
import { IocomeType } from "@domain/model/household/IocomeType";
import { useRouter } from "next/navigation";

type CreditCardDetailTableContainerProps = {
  creditCardSummaryId: string;
};
export const CreditCardDetailTableContainer = ({
  creditCardSummaryId,
}: CreditCardDetailTableContainerProps) => {
  const [isOpen, setOpened] = useState(false);
  const [detailId, setDetailId] = useState<string | null>(null);
  const { push } = useRouter();

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
        // setDetailId(detail.id);
        // setOpened(true);
        push(`/household/creditCard/${detail.id}`);
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
