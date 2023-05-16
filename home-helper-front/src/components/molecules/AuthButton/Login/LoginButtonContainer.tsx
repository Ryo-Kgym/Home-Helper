import React from "react";
import { AuthButtonPresenter } from "@components/molecules/AuthButton/AuthButtonPresenter";
import { useAuth } from "@hooks/authentication/useAuth";

export const LoginButtonContainer = () => {
  const { login } = useAuth();
  const label = "Login";

  return <AuthButtonPresenter label={label} onClickHandler={login} />;
};
