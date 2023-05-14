import { FC } from "react";
import { Frame } from "./";

type AuthButtonPresenterProps = {
  onClickHandler: () => void;
  label: string;
};

export const AuthButtonPresenter: FC<AuthButtonPresenterProps> = ({
  onClickHandler,
  label,
}) => (
  <Frame onClickHandler={onClickHandler}>
    <h3 className="text-2xl font-bold">{label} &rarr;</h3>
  </Frame>
);
