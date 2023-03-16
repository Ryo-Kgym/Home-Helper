import { useExchangeHelpPoint as exchangeHelpPointGql } from "@graphql/apollo/useExchangeHelpPoint";
import { useLoadUser } from "@hooks/useLoadUser";

export const useExchangeHelpPoint = (
  details: ExchangePointForm[]
): Promise<string[]> => {
  return exchangeHelpPointGql(details, useLoadUser().getUserId);
};

export type ExchangePointForm = {
  id: string;
  point: number;
  count: number;
};
