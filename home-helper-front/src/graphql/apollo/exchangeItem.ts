import { gql } from "@apollo/client";
import { query } from "@graphql/apollo/apollo-client";
import { ExchangeItem } from "@domain/model/home_helper/ExchangeItem";

export async function exchangeItem(): Promise<ExchangeItem[]> {
  const param = {
    query: GET_EXCHANGE_ITEMS,
    key: "exchangeItems",
  };

  return query(param);
}

const GET_EXCHANGE_ITEMS = gql`
  query exchangeItems {
    exchangeItems(param: {}) {
      id
      name
      point
    }
  }
`;
