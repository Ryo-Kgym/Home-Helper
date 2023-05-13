import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { LoginButton } from "@components/molecules/LoginButton";

export const GoogleLoginButtonContainer = () => {
  const { data: session } = useSession();
  const label = session ? "Logout" : "Google Login";

  const onClickHandler = session ? () => signOut() : () => signIn();

  return <LoginButton label={label} onClickHandler={onClickHandler} />;
};
