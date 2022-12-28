import { registerHelpPoint as registerHelpPointGql } from "@graphql/apollo/registerHelpPoint";
import { loadUserId } from "@hooks/loadUserId";

export const registerHelpPoint = (
  details: ChargePointForm[]
): Promise<string[]> => {
  return registerHelpPointGql(details, loadUserId());
};

export type ChargePointForm = {
  id: string;
  point: number;
  count: number;
};
