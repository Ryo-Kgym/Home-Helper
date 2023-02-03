import { gql } from "@apollo/client";
import { mutate } from "@graphql/apollo/apollo-client";

export async function registerHelpItem(
  name: string,
  point: number,
  memo?: string
): Promise<string[]> {
  return mutate({
    mutation: REGISTER_HELP_ITEM,
    variables: {
      name: name,
      point: point,
      memo: memo,
    },
    key: "registerHelpItem",
  });
}

const REGISTER_HELP_ITEM = gql`
  mutation registerHelpItem($name: String!, $point: Int!, $memo: String) {
    registerHelpItem(param: { name: $name, point: $point, memo: $memo })
  }
`;
