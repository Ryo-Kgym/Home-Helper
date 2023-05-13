import React from "react";
import { signIn } from "next-auth/react";
import { LoginButton } from "@components/molecules/LoginButton";

export const GoogleLoginButtonContainer = () => {
  const label = "Google Login";

  const onClickHandler = signIn;

  return <LoginButton label={label} onClickHandler={onClickHandler} />;
};
