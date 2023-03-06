import { FC } from "react";
import { HouseHoldPresenter } from "./HouseHoldPresenter";
import { saveUserId } from "@hooks/loadUserId";
import { useGetAllUsersQuery } from "@graphql/postgraphile/generated/graphql";

export const HouseHoldContainer: FC = () => {
  const handleClickUser = (userId: string) => {
    saveUserId(userId);
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
