"use client";

import { useRecoilState } from "recoil";
import { userState } from "@recoil/userState";
import { User } from "@domain/model/User";

export const useUser = () => {
  const [user, setUser] = useRecoilState(userState);

  const save = (user: User) => {
    setUser(user);
  };

  return {
    userId: user.id,
    email: user.email,
    userName: user.name,
    save,
  };
};
