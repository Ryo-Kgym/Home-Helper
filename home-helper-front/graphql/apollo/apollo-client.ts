import { ApolloClient, DocumentNode, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  // TODO env
  uri: "http://localhost:8080/graphql",
  cache: new InMemoryCache(),
});

export async function query(query: DocumentNode): Promise<any> {
  const { data } = await client.query({ query: query });
  return data;
}
