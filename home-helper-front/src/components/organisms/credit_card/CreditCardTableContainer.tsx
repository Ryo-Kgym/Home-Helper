import { CreditCardTablePresenter } from "@components/organisms/credit_card/CreditCardTablePresenter";
import { FC, useState } from "react";
import { useGetCreditCardListQuery } from "@graphql/postgraphile/generated/graphql";
import { TableProps } from "@components/atoms/Table";
import { Split } from "@components/atoms/Split";
import { creditCardListConverter } from "@components/organisms/credit_card/creditCardListConverter";
import { CreditCardDetailTablePresenter } from "@components/organisms/credit_card/CreditCardDetailTablePresenter";

type CreditCardTableContainerProps = {};
export const CreditCardTableContainer: FC<
  CreditCardTableContainerProps
> = () => {
  const [detailProps, setDetailProps] = useState<TableProps[]>([]);

  const [{ data }] = useGetCreditCardListQuery();

  const tableProps: TableProps[] = creditCardListConverter({
    data,
    setDetailProps,
  });

  return (
    <Split
      first={<CreditCardTablePresenter tableProps={tableProps} />}
      second={<CreditCardDetailTablePresenter tableProps={detailProps} />}
      size={40}
    />
  );
};
