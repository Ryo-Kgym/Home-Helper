import { CreditCardTablePresenter } from "@components/organisms/credit_card/CreditCardTablePresenter";
import { FC } from "react";
import { useGetCreditCardListQuery } from "@graphql/postgraphile/generated/graphql";
import { TableProps } from "@components/atoms/Table";
import { Split } from "@components/atoms/Split";
import { creditCardListConverter } from "@components/organisms/credit_card/creditCardListConverter";

type CreditCardTableContainerProps = {};
export const CreditCardTableContainer: FC<
  CreditCardTableContainerProps
> = () => {
  const [{ data }] = useGetCreditCardListQuery();

  const tableProps: TableProps[] = creditCardListConverter({ data });

  return (
    <Split
      first={<CreditCardTablePresenter tableProps={tableProps} />}
      second={<></>}
      size={40}
    />
  );
};
