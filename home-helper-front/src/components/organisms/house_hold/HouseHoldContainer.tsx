import { FC } from "react";
import { HouseHoldPresenter } from "./HouseHoldPresenter";
import { useGetAllUsersQuery } from "@graphql/postgraphile/generated/graphql";
import { useUser } from "@hooks/user/useUser";

export const HouseHoldContainer: FC = () => {
  const { save } = useUser();

  const handleClickUser = (userId: string) => {
    save(userId);
  };

  const [{ data }] = useGetAllUsersQuery();
  const users =
    data?.allUsersList?.map((user) => {
      return {
        id: user.userId,
        name: user.userName,
      };
    }) ?? [];

  return (
    <HouseHoldPresenter userList={users} handleClickUser={handleClickUser} />
  );
};
