import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.scss';
import { ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client";
import {POSTS_QUERY} from './components/GraphQL/Queries';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
});

//Running query outside React
client 
  .query({
    query: POSTS_QUERY
  })
  .then (res => console.log(res));

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
