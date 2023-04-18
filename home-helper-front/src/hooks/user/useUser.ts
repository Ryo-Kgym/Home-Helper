import { useRecoilState } from "recoil";
import { userState } from "@recoil/userState";

export const useUser = () => {
  const [user, setUser] = useRecoilState(userState);

  const save = (user: { userId: string; userName: string }) => {
    setUser(user);
  };
  return { userId: user.userId, userName: user.userName, save };
};
