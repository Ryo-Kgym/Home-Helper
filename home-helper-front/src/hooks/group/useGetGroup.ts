import { useGetUserByEmailQuery } from "@graphql/postgraphile/generated/graphql";
import { useSession } from "next-auth/react";
import { User } from "@domain/model/User";
import { Group } from "@domain/model/Group";

export const useGetGroup = () => {
  const { data: session } = useSession();

  const [{ data }] = useGetUserByEmailQuery({
    variables: {
      email: session?.user?.email!,
    },
  });

  const { email, id, name } = data?.userByEmail!;
  const groups =
    data?.userByEmail?.affiliation?.map((affiliation) => ({
      user: {
        id: id as string,
        name: name as string,
        email,
      } as User,
      group: {
        id: affiliation.group?.id as string,
        name: affiliation.group?.name! as string,
        roleId: affiliation.groupRole?.id! as string,
        role: affiliation.groupRole?.role! as string,
      } as Group,
    })) ?? [];

  return {
    data: groups,
  };
};
