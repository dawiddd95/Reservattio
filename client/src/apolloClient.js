import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { ApolloLink, concat } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';

const httpLink = new HttpLink({ uri: 'http://localhost:5000/graphql' });

const authMiddleware = new ApolloLink((operation, forward) => {
   // add the authorization to the headers
   operation.setContext({
      headers: {
         authorization: localStorage.getItem('token') || null,
      }
   });

   return forward(operation);
})

export const client = new ApolloClient({
   link: concat(authMiddleware, httpLink),
   cache: new InMemoryCache()
});