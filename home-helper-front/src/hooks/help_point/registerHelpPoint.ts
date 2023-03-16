import { registerHelpPoint as registerHelpPointGql } from "@graphql/apollo/registerHelpPoint";
import { useLoadUser } from "@hooks/useLoadUser";

export const registerHelpPoint = (
  details: ChargePointForm[]
): Promise<string[]> => {
  return registerHelpPointGql(details, useLoadUser().getUserId);
};

export type ChargePointForm = {
  id: string;
  point: number;
  count: number;
};
