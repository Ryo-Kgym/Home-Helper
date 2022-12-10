import { FC, useEffect, useState } from "react";
import { PossessionPointPresenter } from "@components/presenter/possession_point/PossessionPointPresenter";
import { User } from "@domain/model/home_helper/User";
import { fetchUser } from "@hooks/user/fetchUser";
import { loadUserId } from "@hooks/loadUserId";

export const PossessionPointContainer: FC = () => {
  const [user, setUser] = useState<User>({
    id: "",
    name: "",
    currentPoint: 0,
    lastHelp: new Date(),
  });

  useEffect(() => {
    fetchUser().then((user) => {
      setUser(user);
    });
  }, []);

  return (
    <PossessionPointPresenter name={user.name} point={user.currentPoint} />
  );
};
