import { user } from "@graphql/apollo/user";
import { User } from "@domain/model/home_helper/User";

export async function fetchUser(userId: string): Promise<User> {
  return user(userId);
}
