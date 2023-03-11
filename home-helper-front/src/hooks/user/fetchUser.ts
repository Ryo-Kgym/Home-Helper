import { user } from "@graphql/apollo/user";
import { User } from "@domain/model/home_helper/User";
import { loadUser } from "@hooks/loadUser";

export async function fetchUser(): Promise<User> {
  return user(loadUser().getUserId);
}
