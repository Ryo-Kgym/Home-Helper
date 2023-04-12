import { FC } from "react";
import { HouseHoldPresenter } from "./HouseHoldPresenter";
import { useGetAllUsersQuery } from "@graphql/postgraphile/generated/graphql";
import { useRecoilState } from "recoil";
import { userIdState } from "@recoil/userIdState";

export const HouseHoldContainer: FC = () => {
  const [_userId, setUserId] = useRecoilState(userIdState);

  const handleClickUser = (userId: string) => {
    setUserId(userId);
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
