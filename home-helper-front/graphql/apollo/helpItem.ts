import { HelpItem } from "@domain/model/home_helper/HelpItem";
import { gql } from "@apollo/client";
import { query } from "@graphql/apollo/apollo-client";

export async function helpItems(): Promise<HelpItem[]> {
  const param = {
    query: GET_HELP_ITEMS,
    key: "helpItems",
  };

  return query(param);
}

const GET_HELP_ITEMS = gql`
  query getHelpItems {
    helpItems(param: {}) {
      id
      name
      point
      memo
    }
  }
`;
