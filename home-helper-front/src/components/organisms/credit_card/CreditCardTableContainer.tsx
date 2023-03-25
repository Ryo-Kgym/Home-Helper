import { CreditCardTablePresenter } from "@components/organisms/credit_card/CreditCardTablePresenter";
import { FC, useState } from "react";
import { useGetCreditCardListQuery } from "@graphql/postgraphile/generated/graphql";
import { TableProps } from "@components/atoms/Table";
import { Split } from "@components/atoms/Split";
import { creditCardListConverter } from "@components/organisms/credit_card/creditCardListConverter";
import { CreditCardDetailTablePresenter } from "@components/organisms/credit_card/CreditCardDetailTablePresenter";
import { CreditCardDetail } from "@domain/model/household/CreditCardDetail";

type CreditCardTableContainerProps = {};
export const CreditCardTableContainer: FC<
  CreditCardTableContainerProps
> = () => {
  const [detailProps, setDetailProps] = useState<TableProps[]>([]);
  const [detail, setDetail] = useState<CreditCardDetail | null>(null);
  const [opened, setOpened] = useState(false);

  const [{ data }] = useGetCreditCardListQuery();

  const tableProps: TableProps[] = creditCardListConverter({
    data,
    setDetailProps,
    setDetail,
    setOpened,
  });

  return (
    <Split
      first={<CreditCardTablePresenter tableProps={tableProps} />}
      second={
        <CreditCardDetailTablePresenter
          tableProps={detailProps}
          opened={opened}
          initData={detail}
          onClose={() => setOpened(false)}
        />
      }
      size={40}
    />
  );
};
