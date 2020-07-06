import * as React from 'react';
import { MovieWrap, ErrorMessage } from './style';
import { MoviePreview } from '../MoviePreviewItem';
import { FavsWrap } from '../FavsContainer';
import Context from '../../Context';

export const MovieContainer = ({ data, error }) => {
  const viewsMoviesInfo = (add) => {
    if (data.length > 0) {
      return data.map((item) => (
        <MoviePreview {...item} add={add} key={item.imdbID} />
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

  return (
    <Context.Consumer>
      {({ favs, addFav }) => {
        return <MovieWrap {...favs}>{viewsMoviesInfo(addFav)}</MovieWrap>;
      }}
    </Context.Consumer>
  );
};
