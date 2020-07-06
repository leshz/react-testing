import * as React from 'react';

import { Container } from '../containers';
import { MovieContainer } from '../components/MoviePreviewContainer';
import { Search } from '../components/Search';
import { Data } from '../interfaces/interfaces';
import Context from '../Context';
import { FavsWrap } from '../components/FavsContainer';

export const SearchPage = (props) => {
  const [error, setError] = React.useState(false);
  const [data, setData] = React.useState<Data[]>([]);

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

  return (
    <Context.Consumer>
      {({ Favorites = [] }) => {
        console.log(Favorites);

        if (Favorites.length > 0) {
          return (
            <Container>
              <FavsWrap favs={Favorites} />
              <Search submit={handlerSubmitForm} />
              <MovieContainer error={error} data={data} />
            </Container>
          );
        }
        return (
          <Container>
            <Search submit={handlerSubmitForm} />
            <MovieContainer error={error} data={data} />
          </Container>
        );
      }}
    </Context.Consumer>
  );
};
