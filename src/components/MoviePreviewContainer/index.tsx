import * as React from 'react';
import { MovieWrap, ErrorMessage } from './style';
import { MoviePreview } from '../MoviePreviewItem';

export const MovieContainer = ({ data, error }) => {
  const viewsMoviesInfo = () => {
    if (data.length > 0) {
      return data.map((item) => <MoviePreview {...item} key={item.imdbID} />);
    }
    if (error) {
      return (
        <ErrorMessage>
          No encontramos resultado{' '}
          <span role="img" aria-label="sad face">
            😅
          </span>
        </ErrorMessage>
      );
    }
    return <h2>Busca tus peliculaas favoritas </h2>;
  };
  return <MovieWrap>{viewsMoviesInfo()}</MovieWrap>;
};
