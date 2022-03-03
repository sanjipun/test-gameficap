import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://backend-stg.silver.sh/graphql/",
  cache: new InMemoryCache(),
});

export default client;
