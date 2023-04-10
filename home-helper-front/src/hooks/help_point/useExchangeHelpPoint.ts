import { useExchangeHelpPoint as exchangeHelpPointGql } from "@graphql/apollo/useExchangeHelpPoint";
import { loadUser } from "@hooks/loadUser";

export const useExchangeHelpPoint = (
  details: ExchangePointForm[]
): Promise<string[]> => {
  return exchangeHelpPointGql(details, loadUser().getUserId);
};

export type ExchangePointForm = {
  id: string;
  point: number;
  count: number;
};
