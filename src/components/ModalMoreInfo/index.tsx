import * as React from 'react';
import { ModalPortal } from '../Modal';
import { dataItem } from '../../interfaces/interfaces';

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
      <div>
        <img src={Poster} alt="" />
        <div>
          <h3>{Title}</h3>
          <p>{Plot}</p>
          <span>Director: {Director}</span>
          <span>Director: {Director}</span>
          <span>Awards:{Awards}</span>
          <span>Language: {Language}</span>
        </div>
      </div>
    );
  };

  return (
    <ModalPortal isOpen={show} onClose={onClose}>
      {contentModal()}
    </ModalPortal>
  );
};
