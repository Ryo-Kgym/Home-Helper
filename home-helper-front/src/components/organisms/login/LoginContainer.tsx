import { LoginPresenter } from "./LoginPresenter";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useGetGroup } from "@hooks/group/useGetGroup";
import { SelectGroupContainer } from "@components/organisms/select_group/SelectGroupContainer";

export const LoginContainer = () => {
  const { data: session } = useSession();
  const email = session?.user?.email ?? undefined;
  const { push } = useRouter();
  const { user } = useGetGroup();
  const [message, setMessage] = useState<string | undefined>(undefined);

  useEffect(() => {
    const nonRegisteredUser = email !== undefined && user === undefined;
    setMessage(
      nonRegisteredUser
        ? "ログインに失敗しました。初めての方は「Sign Up」を押してください。"
        : undefined
    );
  }, []);

  if (user) {
    return <SelectGroupContainer />;
    // push("/select");
  }

  return <LoginPresenter message={message} />;
};
