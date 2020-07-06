import * as React from 'react';
import { Router } from '@reach/router';
import { Login } from './pages/Login';
import { Search } from './pages/Search';
import Context from './Context';

import { GlobalStyle } from './global-styles';

export const App = () => (
  <Context.Consumer>
    {({ isAuth, activateAuth }) => {
      if (!isAuth) {
        return (
          <>
            <GlobalStyle />
            <Router>
              <Login auth={activateAuth} path="/" />
            </Router>
          </>
        );
      }
      return (
        <>
          <GlobalStyle />
          <Router>
            <Search path="/" />
          </Router>
        </>
      );
    }}
  </Context.Consumer>
);
