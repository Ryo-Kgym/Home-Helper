import { registerHelpPoint as registerHelpPointGql } from "@graphql/apollo/registerHelpPoint";
import { loadUser } from "@hooks/loadUser";

export const registerHelpPoint = (
  details: ChargePointForm[]
): Promise<string[]> => {
  return registerHelpPointGql(details, loadUser().getUserId);
};

export type ChargePointForm = {
  id: string;
  point: number;
  count: number;
};
