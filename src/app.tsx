import * as React from 'react';
import { Router } from '@reach/router';
import { LoginPage } from './pages/Login';
import { SearchPage } from './pages/Search';
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
              <LoginPage auth={activateAuth} path="/" />
            </Router>
          </>
        );
      }
      return (
        <>
          <GlobalStyle />
          <Router>
            <SearchPage path="/" />
          </Router>
        </>
      );
    }}
  </Context.Consumer>
);
