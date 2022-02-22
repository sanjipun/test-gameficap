import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://ec2-3-237-8-137.compute-1.amazonaws.com/graphql/",
  cache: new InMemoryCache(),
});

export default client;
