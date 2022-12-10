import { user } from "@graphql/apollo/user";
import { User } from "@domain/model/home_helper/User";
import { loadUserId } from "@hooks/loadUserId";

export async function fetchUser(): Promise<User> {
  return user(loadUserId());
}
