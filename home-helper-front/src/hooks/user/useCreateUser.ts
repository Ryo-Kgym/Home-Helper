import { useUuid } from "@hooks/uuid/useUuid";
import { useCreateUserMutation } from "@graphql/hasura/generated/hasuraGraphql";

export const useCreateUser = () => {
  const { get } = useUuid();
  const [, mutation] = useCreateUserMutation();

  const create = ({ email, userName }: { email: string; userName: string }) => {
    return mutation({
      userId: get(),
      userName,
      email,
      displayOrder: 0,
    });
  };

  return {
    create: create,
  };
};
