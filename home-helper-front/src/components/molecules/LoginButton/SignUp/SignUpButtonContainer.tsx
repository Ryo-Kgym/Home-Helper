import { LoginButton } from "@components/molecules/LoginButton";
import React from "react";

export const SignUpButtonContainer = () => {
  const label = "Sign Up";
  const onClickHandler = () => {};

  return <LoginButton label={label} onClickHandler={onClickHandler} />;
};
