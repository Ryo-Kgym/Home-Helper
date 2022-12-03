import { User } from "@domain/model/home_helper/User";
import { users } from "@graphql/apollo/user";

export async function fetchUsers(): Promise<User[]> {
  return users();
}
