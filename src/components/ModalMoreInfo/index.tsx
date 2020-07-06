import * as React from 'react';
import { ModalPortal } from '../Modal';
import { dataItem } from '../../interfaces/interfaces';
import {
  ContentWrap,
  TextWrap,
  TitleStyled,
  PlotStyled,
  Detail,
} from './style';

export const ModalMoreInfo = ({ show, onClose, movie }) => {
  const [info, setInfo] = React.useState<dataItem>();
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=f12ba140&i=${movie}`)
      .then((success) => success.json())
      .then((resp) => {
        setInfo(resp);
        setLoading(false);
      });
  }, []);

  const contentModal = () => {
    if (loading) {
      return <p>.....loading</p>;
    }
    return buildModal();
  };

  const buildModal = () => {
    const { Title, Poster, Director, Language, Awards, Plot } = info;
    return (
      <ContentWrap>
        <img src={Poster} alt="" />
        <TextWrap>
          <TitleStyled>{Title}</TitleStyled>
          <PlotStyled>{Plot}</PlotStyled>
          <Detail>Director: {Director}</Detail>
          <Detail>Awards: {Awards}</Detail>
          <Detail>Language: {Language}</Detail>
        </TextWrap>
      </ContentWrap>
    );
  };

  return (
    <ModalPortal isOpen={show} onClose={onClose}>
      {contentModal()}
    </ModalPortal>
  );
};
