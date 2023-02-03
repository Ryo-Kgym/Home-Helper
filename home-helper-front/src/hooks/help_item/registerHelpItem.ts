import { registerHelpItem as registerHelpItemGql } from "@graphql/apollo/registerHelpItem";

export const registerHelpItem = (
  name: string,
  point: number,
  memo?: string
): Promise<string[]> => {
  return registerHelpItemGql(name, point, memo);
};
