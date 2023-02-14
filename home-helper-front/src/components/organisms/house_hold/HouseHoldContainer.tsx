import { FC, useEffect, useState } from "react";
import { HouseHoldPresenter } from "./HouseHoldPresenter";
import { User } from "@domain/model/home_helper/User";
import { saveUserId } from "@hooks/loadUserId";
import { fetchUsers } from "@hooks/user/fetchUsers";

export const HouseHoldContainer: FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  const handleClickUser = (userId: string) => {
    saveUserId(userId);
  };

  useEffect(() => {
    fetchUsers().then((r) => setUsers(r));
  }, []);
  return (
    <HouseHoldPresenter userList={users} handleClickUser={handleClickUser} />
  );
};
