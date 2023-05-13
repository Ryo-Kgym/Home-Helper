import { useUuid } from "@hooks/uuid/useUuid";
import { useCreateUserMutation } from "@graphql/postgraphile/generated/graphql";

export const useCreateUser = () => {
  const { get } = useUuid();
  const [ignore, mutation] = useCreateUserMutation();

  const create = async ({
    email,
    userName,
  }: {
    email: string;
    userName: string;
  }) => {
    return mutation({
      userId: get(),
      userName,
      email,
      displayOrder: 0,
      groupId: "",
    });
  };

  return {
    create: create,
  };
};
