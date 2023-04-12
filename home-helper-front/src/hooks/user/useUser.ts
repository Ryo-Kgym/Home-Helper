import { useRecoilState } from "recoil";
import { userIdState } from "@recoil/userIdState";
import { userNameState } from "@recoil/userNameState";

export const useUser = () => {
  const [userId, setUserId] = useRecoilState(userIdState);
  const [userName, setUserName] = useRecoilState(userNameState);

  const save = (user: { userId: string; userName: string }) => {
    setUserId(user.userId);
    setUserName(user.userName);
  };
  return { userId, userName, save };
};
