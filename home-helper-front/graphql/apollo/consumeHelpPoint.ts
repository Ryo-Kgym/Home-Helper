import { mutate } from "@graphql/apollo/apollo-client";
import { gql } from "@apollo/client";
import { ConsumePointForm } from "@hooks/help_point/consumeHelpPoint";

export async function consumeHelpPoint(
  details: ConsumePointForm[],
  userId: string
): Promise<string[]> {
  return mutate({
    mutation: CONSUME_HELP_POINT,
    variables: {
      details: details,
      userId: userId,
    },
    key: "consumeHelpPoint",
  });
}

const CONSUME_HELP_POINT = gql`
  mutation consumeHelpPoint(
    $details: [ConsumeHelpPointDetail]
    $userId: String!
  ) {
    consumeHelpPoint(param: { details: $details, userId: $userId })
  }
`;
