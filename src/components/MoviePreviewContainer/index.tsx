import * as React from 'react';
import { MovieWrap, ErrorMessage } from './style';
import { MoviePreview } from '../MoviePreviewItem';

export const MovieContainer = ({ data, error, add }) => {
  const viewsMoviesInfo = (addFunction) => {
    if (data.length > 0) {
      return data.map((item) => (
        <MoviePreview {...item} add={addFunction} key={item.imdbID} />
      ));
    }
    if (error) {
      return (
        <ErrorMessage>
          No encontramos resultado
          <span role="img" aria-label="sad face">
            😅
          </span>
        </ErrorMessage>
      );
    }
    return <h2>Busca tus peliculas favoritas </h2>;
  };

  return <MovieWrap>{viewsMoviesInfo(add)}</MovieWrap>;
};
