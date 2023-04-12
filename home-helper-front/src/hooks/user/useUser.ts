import { useRecoilState } from "recoil";
import { userIdState } from "@recoil/userIdState";

export const useUser = () => {
  const [userId, setUserId] = useRecoilState(userIdState);

  const save = (userId: string) => {
    setUserId(userId);
  };
  return { userId, save };
};
