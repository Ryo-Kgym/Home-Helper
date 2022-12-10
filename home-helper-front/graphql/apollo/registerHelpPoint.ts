import { mutate } from "@graphql/apollo/apollo-client";
import { gql } from "@apollo/client";
import { ChargePointForm } from "@hooks/help_point/registerHelpPoint";

export async function registerHelpPoint(
  details: ChargePointForm[],
  userId: string
): Promise<string[]> {
  return mutate({
    mutation: REGISTER_HELP_POINT,
    variables: {
      details: details,
      userId: userId,
    },
    key: "registerHelpPoint",
  });
}

const REGISTER_HELP_POINT = gql`
  mutation registerHelpPoint(
    $details: [RegisterHelpPointDetail]
    $userId: String!
  ) {
    registerHelpPoint(param: { details: $details, userId: $userId })
  }
`;
