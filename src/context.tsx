import * as React from 'react';

const Context = React.createContext(null);

const Provider = ({ children }) => {
  const user = sessionStorage.getItem('session') !== null;
  const favsFromStorage = localStorage.getItem('favs');
  const favsInfo = favsFromStorage !== null ? JSON.parse(favsFromStorage) : [];

  const [isAuth, setAuth] = React.useState(user);
  const [Favorites, setFavorites] = React.useState(favsInfo);

  const value = {
    isAuth,
    activateAuth: () => {
      setAuth(true);
    },
    logout: () => {
      sessionStorage.removeItem('session');
      localStorage.removeItem('favs');
      setAuth(false);
      setFavorites([]);
    },
    Favorites,
    addFav: (item) => {
      const newFav = Favorites;
      newFav.push(item);
      localStorage.setItem('favs', JSON.stringify(newFav));
      setFavorites(newFav);
    },
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default {
  Provider,
  Consumer: Context.Consumer,
};
