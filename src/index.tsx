import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './app';
import Context from './context';

ReactDOM.render(
  <Context.Provider>
    <App />
  </Context.Provider>,
  document.getElementById('app')
);
