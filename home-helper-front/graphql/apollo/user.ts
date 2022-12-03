import { User } from "@domain/model/home_helper/User";
import { query } from "@graphql/apollo/apollo-client";
import { gql } from "@apollo/client";

export async function users(): Promise<User[]> {
  return query(GET_USERS).then((r) => r.users);
}

const GET_USERS = gql`
  query Users {
    users(param: {}) {
      id
      name
      currentPoint
      lastHelp
    }
  }
`;
