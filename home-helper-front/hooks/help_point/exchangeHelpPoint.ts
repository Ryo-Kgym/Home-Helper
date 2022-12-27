import { exchangeHelpPoint as exchangeHelpPointGql } from "@graphql/apollo/exchangeHelpPoint";
import { loadUserId } from "@hooks/loadUserId";

export const exchangeHelpPoint = (
  details: ExchangePointForm[]
): Promise<string[]> => {
  return exchangeHelpPointGql(details, loadUserId());
};

export type ExchangePointForm = {
  id: string;
  point: number;
  count: number;
};
