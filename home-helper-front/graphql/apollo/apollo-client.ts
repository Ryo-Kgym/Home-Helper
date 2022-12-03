import { ApolloClient, DocumentNode, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
  cache: new InMemoryCache(),
});

export async function query<T>(param: QueryParam): Promise<T> {
  const { data } = await client.query({
    query: param.query,
    variables: param.variables,
  });
  return data[param.key];
}

export type QueryParam = {
  query: DocumentNode;
  variables?: any;
  key: string;
};
