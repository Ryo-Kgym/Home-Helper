import { FC, useEffect, useState } from "react";
import { PossessionPointPresenter } from "./PossessionPointPresenter";
import { useFetchUser } from "@hooks/user/useFetchUser";

export const PossessionPointContainer: FC = () => {
  const [currentPoint, setCurrentPoint] = useState(0);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    useFetchUser().then((user) => {
      setCurrentPoint(user.currentPoint);
      setUserName(user.name);
    });
  }, []);

  return (
    <PossessionPointPresenter userName={userName} currentPoint={currentPoint} />
  );
};
