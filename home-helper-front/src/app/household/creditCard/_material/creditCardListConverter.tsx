/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { TableProps } from "@components/atoms/Table/index";
import { FormatPrice } from "@components/molecules/FormatPrice/index";
import { IocomeType } from "@domain/model/household/IocomeType";
import { GetCreditCardListQuery } from "@graphql/hasura/generated/hasuraGraphql";

type creditCardListConverterArgs = {
  data: GetCreditCardListQuery | undefined;
  setCreditCardSummaryId: (_: string) => void;
};
export const creditCardListConverter = ({
  data,
  setCreditCardSummaryId,
}: creditCardListConverterArgs): TableProps[] =>
  data?.allCreditCardSummariesList?.map((creditCard) => ({
    keyPrefix: "creditCard",
    columns: [
      { value: creditCard.withdrawalDate, align: "center" },
      { value: creditCard.creditCard, align: "center" },
      {
        value: creditCard.account?.name,
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
      setCreditCardSummaryId(creditCard.id);
    },
  })) ?? [];
