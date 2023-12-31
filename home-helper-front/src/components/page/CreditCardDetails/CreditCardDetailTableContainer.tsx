/*
 * Copyright (c) 2023 Ryo-Kgym.
 */
"use client";

import { TableProps } from "@components/atoms/Table";
import { FormatPrice } from "@components/molecules/FormatPrice";
import { useGetCreditCardDetailBySummaryIdQuery } from "@graphql/hasura/generated/hasuraGraphql";
import { CreditCardDetailTablePresenter } from "./CreditCardDetailTablePresenter";
import { IocomeType } from "@domain/model/household/IocomeType";
import { useRouter } from "next/navigation";

type CreditCardDetailTableContainerProps = {
  creditCardSummaryId: string;
};
export const CreditCardDetailTableContainer = ({
  creditCardSummaryId,
}: CreditCardDetailTableContainerProps) => {
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
      onClick: () =>
        push(`/household/creditCard/${creditCardSummaryId}/${detail.id}`),
    })) ?? [];

  return (
    <CreditCardDetailTablePresenter
      tableProps={tableProps}
      addHandler={() =>
        push(`/household/creditCard/${creditCardSummaryId}/add`)
      }
      backHandler={() => push(`/household/creditCard`)}
    />
  );
};
