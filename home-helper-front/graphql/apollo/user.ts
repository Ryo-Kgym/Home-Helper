import { User } from "@domain/model/home_helper/User";
import { query } from "@graphql/apollo/apollo-client";
import { gql } from "@apollo/client";

export async function users(): Promise<User[]> {
  const param = {
    query: GET_USERS,
    key: "users",
  };

  return query(param);
}

export async function user(userId: string): Promise<User> {
  const param = {
    query: GET_USER,
    variables: { userId: userId },
    key: "user",
  };
  return query(param);
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

const GET_USER = gql`
  query User($userId: ID!) {
    user(userId: $userId) {
      id
      name
      currentPoint
      lastHelp
    }
  }
`;
