import { mutate } from "@graphql/apollo/apollo-client";
import { gql } from "@apollo/client";
import { ExchangePointForm } from "@hooks/help_point/useExchangeHelpPoint";

export async function useExchangeHelpPoint(
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
