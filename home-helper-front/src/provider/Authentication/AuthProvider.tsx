import { ReactNode, useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { data: session } = useSession();
  const { push } = useRouter();

  const checkAuth = () => {
    if (!session) {
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
