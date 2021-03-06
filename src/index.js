import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.scss';
import { ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client";
import {PROD_QUERY, ITEM_QUERY} from './components/GraphQL/Queries';
import { BrowserRouter } from 'react-router-dom';


const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
});

//Running query outside React
client 
  .query({
    query: ITEM_QUERY
  })
  .then (res => console.log(res));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>,
    </BrowserRouter>,
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
