import { useGetUserByEmailQuery } from "@graphql/postgraphile/generated/graphql";
import { useSession } from "next-auth/react";
import { Group } from "@domain/model/Group";
import { User } from "@domain/model/User";

export const useGetGroup = () => {
  const { data: session } = useSession();

  const [{ data }] = useGetUserByEmailQuery({
    variables: {
      email: session?.user?.email ?? "",
    },
  });

  let user: User | undefined = undefined;
  if (data?.userByEmail) {
    user = {
      id: data.userByEmail.id as string,
      name: data.userByEmail.name as string,
      email: data.userByEmail.email as string,
    };
  }

  const groups =
    data?.userByEmail?.affiliation?.map((affiliation) => ({
      group: {
        id: affiliation.group?.id as string,
        name: affiliation.group?.name! as string,
        roleId: affiliation.groupRole?.id! as string,
        role: affiliation.groupRole?.role! as string,
      } as Group,
    })) ?? [];

  return {
    user,
    groups,
  };
};
