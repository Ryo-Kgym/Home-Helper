import { useUuid } from "@hooks/uuid/useUuid";
import { useGroup } from "@hooks/group/useGroup";
import { useCreateAccountMutation } from "@graphql/hasura/generated/hasuraGraphql";

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

  const [, mutation] = useCreateAccountMutation();

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
