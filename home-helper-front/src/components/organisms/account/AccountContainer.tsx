import { AccountPresenter } from "@components/organisms/account/AccountPresenter";
import { TbodyProps } from "@components/atoms/Table";
import { useGetAccountsQuery } from "@graphql/postgraphile/generated/graphql";

export const AccountContainer = () => {
  const [{ data, fetching, error }] = useGetAccountsQuery();
  // TODO loading, error の処理を別コンポに委譲
  if (fetching) return <div>loading...</div>;
  if (error) return <div>{error.message}</div>;

  const tbodyProps: TbodyProps[] =
    data?.allMAccountsList?.map((account) => {
      return {
        keyPrefix: "account",
        columns: [
          { value: account.accountName, align: "left" },
          {
            value: Number(
              account.accountBalanceByAccountId?.balance
            ).toLocaleString(),
            align: "right",
          },
        ],
      };
    }) ?? [];

  return <AccountPresenter tbodyProps={tbodyProps} />;
};
