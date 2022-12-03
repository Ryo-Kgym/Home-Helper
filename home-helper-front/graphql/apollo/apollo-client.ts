import { ApolloClient, DocumentNode, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
  cache: new InMemoryCache(),
});

export async function query(query: DocumentNode): Promise<any> {
  const { data } = await client.query({ query: query });
  return data;
}
