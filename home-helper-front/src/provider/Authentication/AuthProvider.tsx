import { ReactNode, useEffect } from "react";
import { useRouter } from "next/router";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  useEffect(() => {
    try {
      sessionStorage.getItem("userId");
    } catch (e) {
      router.push("/");
    }
  }, []);

  return <>{children}</>;
};
