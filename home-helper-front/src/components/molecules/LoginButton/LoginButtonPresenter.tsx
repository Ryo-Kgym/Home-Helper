import { FC } from "react";
import { Frame } from "@components/molecules/LoginButton";

type GoogleLoginButtonPresenterProps = {
  onClickHandler: () => void;
  label: string;
};

export const LoginButtonPresenter: FC<GoogleLoginButtonPresenterProps> = ({
  onClickHandler,
  label,
}) => (
  <Frame onClickHandler={onClickHandler}>
    <h3 className="text-2xl font-bold">{label} &rarr;</h3>
  </Frame>
);
