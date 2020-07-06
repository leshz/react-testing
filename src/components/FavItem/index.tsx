import * as React from 'react';
import { ContentWrap } from './style';

export const Fav = ({ Poster, Title }) => {
  return (
    <ContentWrap>
      <img src={Poster} alt="" />
      <p>{Title}</p>
    </ContentWrap>
  );
};
