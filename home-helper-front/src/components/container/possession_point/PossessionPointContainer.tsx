import { FC, useEffect, useState } from "react";
import { PossessionPointPresenter } from "@components/presenter/possession_point/PossessionPointPresenter";
import { fetchUser } from "@hooks/user/fetchUser";

export const PossessionPointContainer: FC = () => {
  const [currentPoint, setCurrentPoint] = useState(0);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    fetchUser().then((user) => {
      setCurrentPoint(user.currentPoint);
      setUserName(user.name);
    });
  }, []);

  return (
    <PossessionPointPresenter userName={userName} currentPoint={currentPoint} />
  );
};
