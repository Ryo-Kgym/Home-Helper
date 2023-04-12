import { useRecoilState } from "recoil";
import { userIdState } from "@recoil/userIdState";

export const useUser = () => {
  const [userId] = useRecoilState(userIdState);
  return { userId };
};

export const saveUser = () => {
  const [_userId, setUserId] = useRecoilState(userIdState);

  const save = (userId: string) => {
    setUserId(userId);
  };

  return { save };
};
