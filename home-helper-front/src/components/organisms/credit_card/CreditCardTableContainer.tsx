import { CreditCardTablePresenter } from "@components/organisms/credit_card/CreditCardTablePresenter";
import { FC, useState } from "react";
import { useGetCreditCardListQuery } from "@graphql/postgraphile/generated/graphql";
import { TableProps } from "@components/atoms/Table";
import { Split } from "@components/atoms/Split";
import { creditCardListConverter } from "@components/organisms/credit_card/creditCardListConverter";
import { CreditCardDetailTable } from "@components/organisms/credit_card/CreditCardDetailTable";

type CreditCardTableContainerProps = {};
export const CreditCardTableContainer: FC<
  CreditCardTableContainerProps
> = () => {
  const [creditCardSummaryId, setCreditCardSummaryId] = useState<string>("");

  const [{ data }] = useGetCreditCardListQuery();

  const tableProps: TableProps[] = creditCardListConverter({
    data,
    setCreditCardSummaryId,
  });

  return (
    <Split
      first={<CreditCardTablePresenter tableProps={tableProps} />}
      second={
        <CreditCardDetailTable creditCardSummaryId={creditCardSummaryId} />
      }
      size={40}
    />
  );
};
