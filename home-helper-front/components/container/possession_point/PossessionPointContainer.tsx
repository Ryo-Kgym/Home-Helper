import { FC, useEffect, useState } from "react";
import { PossessionPointPresenter } from "@components/presenter/possession_point/PossessionPointPresenter";

type PossessionPointContainerProps = {};

export const PossessionPointContainer: FC<PossessionPointContainerProps> = (
  props
) => {
  const [user, setUser] = useState<UserData>(DefaultUserData);

  const loadUser = () => {
    const userId = sessionStorage.getItem("userId");
    setUser(userData(userId));
  };

  useEffect(loadUser, []);

  return <PossessionPointPresenter name={user.name} point={user.point} />;
};

function userData(userid: string | null): UserData {
  if (userid === "1") {
    return User(userid, "ユーザ1", 20000);
  } else if (userid === "2") {
    return User(userid, "ユーザ2", 300000);
  } else {
    return User("error", "不明なユーザ", 20000);
  }
}

type UserData = {
  id: string;
  name: string;
  point: number;
};

const DefaultUserData: UserData = {
  id: "",
  name: "",
  point: 0,
};

function User(id: string, name: string, point: number): UserData {
  return {
    id: id,
    name: name,
    point: point,
  };
}
