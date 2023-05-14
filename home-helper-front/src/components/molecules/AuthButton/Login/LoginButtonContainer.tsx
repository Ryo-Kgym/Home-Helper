import React from "react";
import { signIn } from "next-auth/react";
import { AuthButtonPresenter } from "@components/molecules/AuthButton/AuthButtonPresenter";

export const LoginButtonContainer = () => {
  const label = "Login";
  const onClickHandler = () => {
    signIn("*", { callbackUrl: "/select" });
  };

  return <AuthButtonPresenter label={label} onClickHandler={onClickHandler} />;
};
