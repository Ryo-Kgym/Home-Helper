import { useRecoilState } from "recoil";
import { userIdState } from "@recoil/userIdState";

export const useUser = () => {
  const [userId, setUserId] = useRecoilState(userIdState);

  const save = (user: { userId: string; userName: string }) => {
    setUserId(user.userId);
  };
  return { userId, save };
};
