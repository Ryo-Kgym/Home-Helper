import { signIn, signOut } from "next-auth/react";
import { useUser } from "@hooks/user/useUser";
import { useGroup } from "@hooks/group/useGroup";

export const useAuth = () => {
  const { save: saveUser } = useUser();
  const { save: saveGroup } = useGroup();

  const login = () => {
    signIn("*", { callbackUrl: "/select" });
  };

  const logout = () => {
    saveUser({ id: "", name: "", email: "" });
    saveGroup({ id: "", name: "" });
    signOut({ callbackUrl: "/" });
  };

  return {
    login,
    logout,
  };
};
