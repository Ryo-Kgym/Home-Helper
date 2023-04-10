import { ReactNode, useEffect } from "react";
import { useRouter } from "next/router";
import { loadUser } from "@hooks/loadUser";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { push } = useRouter();

  const checkAuth = () => {
    const { getUserId } = loadUser();
    if (!getUserId) {
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
