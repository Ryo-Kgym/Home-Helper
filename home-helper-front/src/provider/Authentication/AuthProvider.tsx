import { ReactNode, useEffect } from "react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { userIdState } from "@recoil/userIdState";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [userId] = useRecoilState(userIdState);
  const { push } = useRouter();

  const checkAuth = () => {
    if (userId.length === 0) {
      push("/");
    }
  };

  useEffect(
    () => {
      checkAuth();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return <>{children}</>;
};
