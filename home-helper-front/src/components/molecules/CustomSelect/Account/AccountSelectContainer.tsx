import { FC } from "react";
import { AccountSelectPresenter } from "./AccountSelectPresenter";
import { useGetValidAccountsQuery } from "@graphql/postgraphile/generated/graphql";
import { useGroup } from "@hooks/group/useGroup";

type AccountSelectContainerProps = {
  accountId: string | null;
  setAccountId: (value: string | null) => void;
};
export const AccountSelectContainer: FC<AccountSelectContainerProps> = ({
  accountId,
  setAccountId,
}) => {
  const { groupId } = useGroup();
  const [{ data }] = useGetValidAccountsQuery({
    variables: {
      groupId,
    },
  });

  const accounts =
    data?.allAccountsList?.map((account) => {
      return {
        label: account.accountName,
        value: account.accountId,
        description: account.accountName,
      };
    }) ?? [];

  return (
    <AccountSelectPresenter
      value={accountId}
      onChange={setAccountId}
      accounts={accounts}
    />
  );
};
