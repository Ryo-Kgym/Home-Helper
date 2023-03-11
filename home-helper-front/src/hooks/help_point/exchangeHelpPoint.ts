import { exchangeHelpPoint as exchangeHelpPointGql } from "@graphql/apollo/exchangeHelpPoint";
import { loadUser } from "@hooks/loadUser";

export const exchangeHelpPoint = (
  details: ExchangePointForm[]
): Promise<string[]> => {
  return exchangeHelpPointGql(details, loadUser().getUserId);
};

export type ExchangePointForm = {
  id: string;
  point: number;
  count: number;
};
