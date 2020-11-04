import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import './index.css';
import App from './App';
import { Helmet } from "react-helmet";

const client = new ApolloClient({
  uri: 'https://spacexdata.herokuapp.com/graphql',
});

ReactDOM.render(
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Space X Rockets Pet Project</title>
      <meta name="robots" content="noindex" />
    </Helmet>
    <ApolloProvider client={client}>
      <ApolloHooksProvider client={client}>
        <App />
      </ApolloHooksProvider>
    </ApolloProvider>
  </>,
  document.getElementById('root'),
);
