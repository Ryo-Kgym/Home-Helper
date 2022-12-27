import { consumeHelpPoint as consumeHelpPointGql } from "@graphql/apollo/consumeHelpPoint";
import { loadUserId } from "@hooks/loadUserId";

export const consumeHelpPoint = (
  details: ConsumePointForm[]
): Promise<string[]> => {
  return consumeHelpPointGql(details, loadUserId());
};

export type ConsumePointForm = {
  id: string;
  point: number;
  count: number;
};
