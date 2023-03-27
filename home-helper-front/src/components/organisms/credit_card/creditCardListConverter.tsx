import { FormatPrice } from "@components/molecules/FormatPrice";
import { IocomeType } from "@domain/model/household/IocomeType";
import { GetCreditCardListQuery } from "@graphql/postgraphile/generated/graphql";
import { TableProps } from "@components/atoms/Table";

type creditCardListConverterArgs = {
  data: GetCreditCardListQuery | undefined;
  setCreditCardSummaryId: (creditCardSummaryId: string) => void;
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
        value: creditCard.accountByAccountId?.accountName,
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
