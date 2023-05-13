import { LoginPresenter } from "./LoginPresenter";
import { useUser } from "@hooks/user/useUser";
import { useRouter } from "next/router";

export const LoginContainer = () => {
  const { userId } = useUser();
  const { push } = useRouter();

  if (userId) {
    push("/top");
  }

  return <LoginPresenter />;
};
