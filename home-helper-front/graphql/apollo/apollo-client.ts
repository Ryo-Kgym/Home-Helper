import { ApolloClient, DocumentNode, InMemoryCache } from "@apollo/client";

const client = () => {
  const cache = new InMemoryCache();
  cache.gc({ resetResultCache: true });

  return new ApolloClient({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
    cache: cache,
  });
};

export async function query<T>({
  query,
  variables,
  key,
}: QueryParam): Promise<T> {
  const { data } = await client().query({
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
  const { data } = await client().mutate({
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
