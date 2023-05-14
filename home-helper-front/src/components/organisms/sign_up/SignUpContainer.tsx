import { SignUpPresenter } from "@components/organisms/sign_up/SignUpPresenter";
import { useUser } from "@hooks/user/useUser";
import { useState } from "react";
import { useCreateUser } from "@hooks/user/useCreateUser";
import { errorPopup, successPopup } from "@function/successPopup";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";

export const SignUpContainer = () => {
  const { push } = useRouter();
  const { email: defaultEmail, userName: defaultUserName } = useUser();
  const { create } = useCreateUser();

  const [email, setEmail] = useState<string>(defaultEmail ?? "");
  const [userName, setUserName] = useState<string>(defaultUserName ?? "");
  const emailDisabled = defaultEmail !== undefined;

  const registerHandler = () => {
    create({ email, userName })
      .then(() => {
        successPopup("登録しました。ログインしてください。");
        signOut();
        push("/");
      })
      .catch((error) => {
        errorPopup(error.message);
      });
  };

  return (
    <SignUpPresenter
      email={email}
      setEmail={setEmail}
      emailDisabled={emailDisabled}
      userName={userName}
      setUserName={setUserName}
      registerHandler={registerHandler}
    />
  );
};
