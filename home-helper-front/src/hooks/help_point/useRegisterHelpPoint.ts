import { useRegisterHelpPoint as registerHelpPointGql } from "@graphql/apollo/useRegisterHelpPoint";
import { useLoadUser } from "@hooks/useLoadUser";

export const useRegisterHelpPoint = (
  details: ChargePointForm[]
): Promise<string[]> => {
  return registerHelpPointGql(details, useLoadUser().getUserId);
};

export type ChargePointForm = {
  id: string;
  point: number;
  count: number;
};
