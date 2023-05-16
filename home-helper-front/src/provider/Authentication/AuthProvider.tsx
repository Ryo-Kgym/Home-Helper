import { ReactNode, useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    console.log(status);
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status]);

  return <>{children}</>;
};
