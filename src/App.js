import React from 'react';
import Dashboard from './Dashboard';
import ListUsers from './ListUsers';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { ApolloClient } from 'apollo-client';
// import { InMemoryCache } from 'apollo-cache-inmemory';
// import { setContext } from 'apollo-link-context';
// import { createHttpLink } from 'apollo-link-http';
// import { ApolloProvider } from '@apollo/react-hooks';

// const http_link = createHttpLink({
//   uri: 'https://graphqlzero.almansi.me/api'
// })

// const client = new ApolloClient({
//   link: http_link,
//   cache: new InMemoryCache()
// })
function App() {
  return (
    // <ApolloProvider client={client}>
    <BrowserRouter>
      <Switch>
        <Route path='/Dashboard' exact component={Dashboard} />
        <Route path='/ListUsers' exact component={ListUsers} />
        <Route path='/' exact component={ListUsers} />
      </Switch>
    </BrowserRouter>
    // </ApolloProvider >
  );
}

export default App;
