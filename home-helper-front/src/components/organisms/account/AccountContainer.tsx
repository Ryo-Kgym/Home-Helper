import { AccountPresenter } from "@components/organisms/account/AccountPresenter";
import { TableProps } from "@components/atoms/Table";
import { useGetAccountBalanceListQuery } from "@graphql/postgraphile/generated/graphql";
import { Fetching } from "@components/molecules/Fetching";
import { FetchError } from "@components/molecules/FetchError";

export const AccountContainer = () => {
  const [{ data, fetching, error }] = useGetAccountBalanceListQuery();
  if (fetching) return <Fetching />;
  if (error) return <FetchError error={error} />;

  const tableProps: TableProps[] =
    data?.accountTotalList?.map((account) => {
      return {
        keyPrefix: "account",
        columns: [
          { value: account?.accountName, align: "left" },
          {
            value: Number(account?.total).toLocaleString(),
            align: "right",
          },
        ],
      };
    }) ?? [];

  return <AccountPresenter tableProps={tableProps} />;
};
