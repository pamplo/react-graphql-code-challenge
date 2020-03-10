import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { graphqlUri } from './config';
import PeopleList from './containers/PeopleList';

const client = new ApolloClient({ uri: graphqlUri });

const App = () => {
  return (
    <ApolloProvider client={client}>
      <h1 className="header">
        <img src="assets/img/logo.png" alt="Star Wars Personagens" />
      </h1>
      <PeopleList />
    </ApolloProvider>
  );
};

export default App;
