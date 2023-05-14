import { LoginPresenter } from "./LoginPresenter";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useGetGroup } from "@hooks/group/useGetGroup";

export const LoginContainer = () => {
  const { data: session } = useSession();
  const email = session?.user?.email ?? undefined;
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

  return <LoginPresenter message={message} />;
};
