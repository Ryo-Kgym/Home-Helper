import { AccountSelectPresenter } from "./AccountSelectPresenter";
import { useGetValidAccountsQuery } from "@graphql/hasura/generated/hasuraGraphql";
import { useGroup } from "@hooks/group/useGroup";

type AccountSelectContainerProps = {
  accountId: string | null;
  setAccountId: (_: string | null) => void;
};
export const AccountSelectContainer = ({
  accountId,
  setAccountId,
}: AccountSelectContainerProps) => {
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
