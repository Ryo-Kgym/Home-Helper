import { signIn, signOut } from "next-auth/react";
import { useUser } from "@hooks/user/useUser";
import { useGroup } from "@hooks/group/useGroup";
import { useMessage } from "@hooks/message/useMessage";

export const useAuth = () => {
  const { save: saveUser } = useUser();
  const { save: saveGroup } = useGroup();
  const { setMessage } = useMessage();

  const login = () => {
    signIn("*", { callbackUrl: "/select" });
  };

  const logout = () => {
    saveUser({ id: "", name: "", email: "" });
    saveGroup({ id: "", name: "" });
    setMessage("ログアウトしました。");

    signOut({ callbackUrl: "/" });
  };

  return {
    login,
    logout,
  };
};
