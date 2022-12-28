import { FC, useEffect, useState } from "react";
import { HomeHelperPresenter } from "@components/presenter/home_helper/HomeHelperPresenter";
import { fetchUsers } from "@hooks/user/fetchUsers";
import { User } from "@domain/model/home_helper/User";
import { saveUserId } from "@hooks/loadUserId";

export const HomeHelperContainer: FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  const handleClickUser = (userId: string) => {
    saveUserId(userId);
  };

  useEffect(() => {
    fetchUsers().then((r) => setUsers(r));
  }, []);

  return (
    <HomeHelperPresenter userList={users} handleClickUser={handleClickUser} />
  );
};
