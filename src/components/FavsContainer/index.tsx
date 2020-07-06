import * as React from 'react';
import { Fav } from '../FavItem';
import { Wrapper, FavsContainer } from './style';

export const FavsWrap = ({ favs }) => {
  const renderFavs = () => {
    return favs.map((item) => <Fav {...item} key={item.idmb} />);
  };
  return (
    <FavsContainer>
      <h2>Tus favoritos</h2>
      <Wrapper>{renderFavs()}</Wrapper>
    </FavsContainer>
  );
};
