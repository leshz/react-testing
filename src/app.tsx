import * as React from 'react';
import { Router } from '@reach/router';
import { Login } from './pages/Login';
import { Search } from './pages/Search';

import { GlobalStyle } from './global-styles';


export const App = () => (
  <>  
    <GlobalStyle />
    <Router>
      <Login path="/" />
      <Search path="/main" />
    </Router>
  </>
);