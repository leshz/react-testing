import * as React from 'react';

const Context = React.createContext(null);

const Provider = ({ children }) => {
  const user = sessionStorage.getItem('session') !== null;

  const [isAuth, setAuth] = React.useState(user);
  const value = {
    isAuth,
    activateAuth: () => {
      setAuth(true);
    },
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default {
  Provider,
  Consumer: Context.Consumer,
};
