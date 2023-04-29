import { useUuid } from "@hooks/uuid/useUuid";
import { useGroup } from "@hooks/group/useGroup";
import { useCreateAccountMutation } from "@graphql/postgraphile/generated/graphql";

type CreateAccountArgs = {
  accountName: string;
  displayOrder: number;
};

export const useCreateAccount = ({
  accountName,
  displayOrder,
}: CreateAccountArgs) => {
  const { get } = useUuid();
  const { groupId } = useGroup();

  const [ignore, mutation] = useCreateAccountMutation();

  const registerAccount = () => {
    return mutation({
      accountId: get(),
      accountName,
      displayOrder,
      groupId,
    });
  };

  return { registerAccount };
};
