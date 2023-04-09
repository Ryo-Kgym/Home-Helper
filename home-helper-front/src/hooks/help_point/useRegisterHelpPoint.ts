import { useRegisterHelpPoint as registerHelpPointGql } from "@graphql/apollo/useRegisterHelpPoint";
import { loadUser } from "@hooks/loadUser";

export const useRegisterHelpPoint = (
  details: ChargePointForm[]
): Promise<string[]> => {
  return registerHelpPointGql(details, loadUser().getUserId);
};

export type ChargePointForm = {
  id: string;
  point: number;
  count: number;
};
