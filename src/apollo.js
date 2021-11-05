import {ApolloClient, InMemoryCache} from '@apollo/client';

const Client = new ApolloClient({
    uri: "https://movieql2.vercel.app",
    cache: new InMemoryCache()
  });

  export default Client; 