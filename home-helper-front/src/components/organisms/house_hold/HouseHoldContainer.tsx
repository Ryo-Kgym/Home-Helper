import { FC } from "react";
import { HouseHoldPresenter } from "./HouseHoldPresenter";
import { useGetAllUsersQuery } from "@graphql/postgraphile/generated/graphql";
import { saveUser } from "@hooks/user/useUser";

export const HouseHoldContainer: FC = () => {
  const { save } = saveUser();

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
