import { mutate } from "@graphql/apollo/apollo-client";
import { gql } from "@apollo/client";
import { ExchangePointForm } from "@hooks/help_point/exchangeHelpPoint";

export async function exchangeHelpPoint(
  details: ExchangePointForm[],
  userId: string
): Promise<string[]> {
  return mutate({
    mutation: EXCHANGE_HELP_POINT,
    variables: {
      details: details,
      userId: userId,
    },
    key: "consumeHelpPoint",
  });
}

const EXCHANGE_HELP_POINT = gql`
  mutation exchangeHelpPoint(
    $details: [ExchangeHelpPointDetail]
    $userId: String!
  ) {
    exchangeHelpPoint(param: { details: $details, userId: $userId })
  }
`;
