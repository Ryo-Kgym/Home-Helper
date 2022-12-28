import { ExchangeItem } from "@domain/model/home_helper/ExchangeItem";
import { exchangeItem } from "@graphql/apollo/exchangeItem";

export async function fetchExchangeItems(): Promise<ExchangeItem[]> {
  return exchangeItem();
}
