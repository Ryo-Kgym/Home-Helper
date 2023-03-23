import { FormatPrice } from "@components/molecules/FormatPrice";
import { IocomeType } from "@domain/model/household/IocomeType";
import { Button } from "@components/atoms/Button";
import { GetCreditCardListQuery } from "@graphql/postgraphile/generated/graphql";
import { TableProps } from "@components/atoms/Table";

type creditCardListConverterArgs = {
  data: GetCreditCardListQuery | undefined;
};
export const creditCardListConverter = ({
  data,
}: creditCardListConverterArgs): TableProps[] => {
  return (
    data?.allCreditCardSummariesList?.map((c) => {
      return {
        keyPrefix: "creditCard",
        columns: [
          { value: c.withdrawalDate, align: "center" },
          { value: c.creditCard, align: "center" },
          {
            value: c.accountByAccountId?.accountName,
          },
          {
            value: (
              <FormatPrice
                price={c.totalAmount}
                iocomeType={IocomeType.Outcome}
              />
            ),
            align: "right",
          },
          {
            value: <Button onClick={() => {}} colorType={"detail"} />,
            align: "center",
          },
        ],
      };
    }) ?? []
  );
};
