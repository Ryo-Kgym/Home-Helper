import { ApolloClient, DocumentNode, InMemoryCache } from "@apollo/client";
import { FetchResult } from "@node_modules/@apollo/client";

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
  cache: new InMemoryCache(),
});

export async function query<T>({
  query,
  variables,
  key,
}: QueryParam): Promise<T> {
  const { data } = await client.query({
    query: query,
    variables: variables,
  });
  return data[key];
}

export type QueryParam = {
  query: DocumentNode;
  variables?: any;
  key: string;
};

export async function mutate<T>({
  mutation,
  variables,
  key,
}: MutateParam): Promise<T> {
  const { data } = await client.mutate({
    mutation: mutation,
    variables: variables,
  });

  return data[key];
}

type MutateParam = {
  mutation: DocumentNode;
  variables?: any;
  key: string;
};
