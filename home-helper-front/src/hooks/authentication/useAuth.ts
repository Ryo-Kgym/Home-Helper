import { useUser } from "@hooks/user/useUser";
import { useGroup } from "@hooks/group/useGroup";
import { useMessage } from "@hooks/message/useMessage";
import { useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export const useAuth = () => {
  const { save: saveUser } = useUser();
  const { save: saveGroup } = useGroup();
  const { setMessage } = useMessage();
  const { signOut } = useClerk();
  const { push } = useRouter();

  const logout = () => {
    saveUser({ id: "", name: "", email: "" });
    saveGroup({ id: "", name: "" });
    setMessage("ログアウトしました。");

    signOut();
    push("/");
  };

  return {
    logout,
  };
};
