import ApolloClient from '@apollo/client';
import detail from './detail';

const client = new ApolloClient({
    uri: 'https://movieql.now.sh'
  });

  export default client; 