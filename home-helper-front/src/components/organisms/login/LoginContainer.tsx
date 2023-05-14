import { LoginPresenter } from "./LoginPresenter";
import { useUser } from "@hooks/user/useUser";
import { useRouter } from "next/router";
import { useGetUserByEmailQuery } from "@graphql/postgraphile/generated/graphql";

export const LoginContainer = () => {
  const { email } = useUser();
  const { push } = useRouter();
  const [{ data }] = useGetUserByEmailQuery({
    variables: {
      email: email ?? "",
    },
  });

  if (data?.userByEmail) {
    push("/top");
  }

  const nonRegisteredUser = email !== undefined && data?.userByEmail === null;
  const message = nonRegisteredUser
    ? "ログインに失敗しました。初めての方は「Sign Up」を押してください。"
    : undefined;

  return <LoginPresenter message={message} />;
};
