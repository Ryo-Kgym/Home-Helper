import { ReactNode, useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useGetGroup } from "@hooks/group/useGetGroup";
import { useMessage } from "@hooks/message/useMessage";
import { useAuth } from "@hooks/authentication/useAuth";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { status } = useSession();
  const { user } = useGetGroup();
  const { setMessage } = useMessage();
  const { logout } = useAuth();

  const router = useRouter();

  useEffect(() => {
    // 認証されてない場合
    if (status === "unauthenticated") {
      logout();
    }
    // 認証されているが、ユーザーが未登録の場合
    if (status === "authenticated" && user === undefined) {
      setMessage(
        "ログインに失敗しました。初めての方は「Sign Up」を押してください。"
      );
      router.push("/");
    }
  }, []);

  return <>{children}</>;
};
