import React from 'react';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import {base_uri_graphql} from '../config'

const client = new ApolloClient({
  uri:base_uri_graphql,
  cache: new InMemoryCache()
});

export default function GraphqlProvider({ children }) {
  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  )
}