import { FC } from "react";
import { AccountSelectPresenter } from "./AccountSelectPresenter";
import { useGetValidAccountsQuery } from "@graphql/postgraphile/generated/graphql";

type AccountSelectContainerProps = {};
export const AccountSelectContainer: FC<AccountSelectContainerProps> = () => {
  const [{ data }] = useGetValidAccountsQuery();

  const accounts =
    data?.allAccountsList?.map((account) => {
      return {
        label: account.accountName,
        value: account.accountId,
        description: account.accountName,
      };
    }) ?? [];

  return <AccountSelectPresenter accounts={accounts} />;
};
