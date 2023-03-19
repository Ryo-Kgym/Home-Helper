import { user } from "@graphql/apollo/user";
import { User } from "@domain/model/home_helper/User";
import { useLoadUser } from "@hooks/useLoadUser";

export async function useFetchUser(): Promise<User> {
  return user(useLoadUser().getUserId);
}
