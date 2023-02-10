import { gql } from "@apollo/client";
import { mutate } from "@graphql/apollo/apollo-client";
import { memo } from "react";

export async function registerExchangeItem(
  name: string,
  point: number
): Promise<string[]> {
  return mutate({
    mutation: REGISTER_EXCHANGE_ITEM,
    variables: {
      name: name,
      point: point,
    },
    key: "registerExchangeItem",
  });
}

const REGISTER_EXCHANGE_ITEM = gql`
  mutation registerExchangeItem($name: String!, $point: Int!) {
    registerExchangeItem(param: { name: $name, point: $point })
  }
`;
