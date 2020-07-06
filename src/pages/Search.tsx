import * as React from 'react';

import { Container } from '../containers';
import { MovieContainer } from '../components/MoviePreviewContainer';
import { Search } from '../components/Search';
import { Data } from '../interfaces/interfaces';
import { FavsWrap } from '../components/FavsContainer';

export const SearchPage = (props) => {
  const [error, setError] = React.useState(false);
  const [data, setData] = React.useState<Data[]>([]);

  const favsFromStorage = localStorage.getItem('favs');
  const favsInfo = favsFromStorage !== null ? JSON.parse(favsFromStorage) : [];
  const [favorites, setFavorites] = React.useState(favsInfo);

  const handlerSubmitForm = (value) => {
    setError(false);
    if (value !== '') {
      fetch(`https://www.omdbapi.com/?apikey=f12ba140&s=${value}`)
        .then((success) => success.json())
        .then((resp) => {
          if (resp.Response === 'True') {
            setData(resp.Search);
          } else {
            setData([]);
            setError(true);
          }
        })
        .catch((e) => {
          console.warn(e.message);
          setError(true);
        });
    }
  };

  const addFavorites = (item) => {
    const favs = favorites.concat(item);
    localStorage.setItem('favs', JSON.stringify(favs));

    setFavorites(favs);
  };

  return (
    <Container>
      {favorites.length > 0 && <FavsWrap favs={favorites} />}
      <Search submit={handlerSubmitForm} />
      <MovieContainer error={error} add={addFavorites} data={data} />
    </Container>
  );
};
