import { useSession } from "next-auth/react";

export const useUser = () => {
  const { data: session } = useSession();

  const save = (user: { userId: string; userName: string }) => {};
  return { userId: session?.user?.email, userName: session?.user?.name, save };
};
