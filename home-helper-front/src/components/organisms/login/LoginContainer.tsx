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

  const nonRegisteredUser = !data?.userByEmail && email;
  const message = nonRegisteredUser
    ? "登録されてないユーザです。Sign Upを押してください"
    : undefined;

  return <LoginPresenter message={message} />;
};
