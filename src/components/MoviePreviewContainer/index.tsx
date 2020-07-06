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
    return <h2>Busca tus peliculaas favoritas </h2>;
  };

  return (
    <Context.Consumer>
      {({ isAuth, favs, addFav }) => {
        console.log(favs, 'container');
        return (
          <MovieWrap>
            {viewsMoviesInfo(addFav)}
            <button
              type="button"
              onClick={() => {
                addFav({ coco: 'coco' });
              }}
            >
              cllick
            </button>
          </MovieWrap>
        );
      }}
    </Context.Consumer>
  );
};
