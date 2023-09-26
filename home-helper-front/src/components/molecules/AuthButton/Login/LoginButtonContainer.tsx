import React from "react";
import { AuthButtonPresenter } from "@components/molecules/AuthButton/AuthButtonPresenter";
import { useRouter } from "next/navigation";
import { useUser } from "@hooks/user/useUser";

export const LoginButtonContainer = () => {
  const { push } = useRouter();
  const { userId } = useUser();

  const label = "Login";
  const onClickHandler = () => {
    if (userId) return push("/select");
    return push("/sign-in");
  };

  return <AuthButtonPresenter label={label} onClickHandler={onClickHandler} />;
};
