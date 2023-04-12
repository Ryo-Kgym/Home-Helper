import { ReactNode, useEffect } from "react";
import { useRouter } from "next/router";
import { useUser } from "@hooks/user/useUser";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { userId } = useUser();
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
