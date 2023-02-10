import { registerExchangeItem as registerExchangeItemGql } from "@graphql/apollo/registerExchangeItem";

export const registerExchangeItem = (
  name: string,
  point: number
): Promise<string[]> => {
  return registerExchangeItemGql(name, point);
};
