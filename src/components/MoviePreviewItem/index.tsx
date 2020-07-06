import * as React from 'react';
import { AiFillHeart, AiFillPlusCircle } from 'react-icons/ai';
import { Data } from '../../interfaces/interfaces';
import { ModalMoreInfo } from '../ModalMoreInfo';
import { MovieItem, Infomation, TitleItem, Button, ButtonWrap } from './style';

export const MoviePreview = ({ Title, Poster, Type, Year, imdbID }: Data) => {
  const [show, setShow] = React.useState(false);
  const imagenRender = () => {
    if (Poster !== 'N/A') {
      return <img src={Poster} alt={`${Title} Movie's poster`} />;
    }
    return (
      <img
        src="https://static.amazon.jobs/teams/53/images/IMDb_Header_Page.jpg?1501027252"
        alt={`${Title} Movie's poster`}
      />
    );
  };

  const addToFavorites = () => {};

  const showMoreInformation = () => {
    setShow(true);
  };

  const onCloseModal = () => {
    setShow(false);
  };

  return (
    <MovieItem>
      {imagenRender()}
      <Infomation>
        <TitleItem>{Title}</TitleItem>
        <span>
          Año:<small>{Year}</small>
        </span>
      </Infomation>
      <ButtonWrap>
        <Button type="button" onClick={addToFavorites}>
          <AiFillHeart />
        </Button>
        <Button type="button" onClick={showMoreInformation}>
          <AiFillPlusCircle />
        </Button>
      </ButtonWrap>
      {show && <ModalMoreInfo show={show} onClose={onCloseModal} />}
    </MovieItem>
  );
};
