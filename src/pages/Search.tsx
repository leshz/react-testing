import * as React from 'react';

import { Container } from '../containers';
import { MovieContainer } from '../components/MoviePreviewContainer';
import { Search } from '../components/Search';
import { Data } from '../interfaces/interfaces';

export const SearchPage = (props) => {
  const [error, setError] = React.useState(false);

  const [data, setData] = React.useState<Data[]>([]);

  const handlerSubmitForm = (value) => {
    setError(false);
    if (value !== '') {
      fetch(`http://www.omdbapi.com/?apikey=f12ba140&s=${value}`)
        .then((success) => success.json())
        .then((resp) => {
          if (resp.Response === 'True') {
            setData(resp.Search);
          } else {
            setData([]);
            setError(true);
          }
        });
    }
  };

  return (
    <Container>
      <Search submit={handlerSubmitForm} />
      <MovieContainer error={error} data={data} />
    </Container>
  );
};
