import { HelpItem } from "@domain/model/home_helper/HelpItem";
import { helpItems } from "@graphql/apollo/helpItem";

export async function fetchHelpItems(): Promise<HelpItem[]> {
  return helpItems();
}
