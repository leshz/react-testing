import * as React from 'react';
import { ModalPortal } from '../Modal';

export const ModalMoreInfo = ({ show, onClose }) => {
  const [info, setInfo] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    fetch('http://www.omdbapi.com/?apikey=f12ba140&i=tt0372784')
      .then((success) => success.json())
      .then((resp) => {
        if (resp.Response === 'True') {
          setInfo(resp.Search);
          setLoading(false);
        }
      });
  }, []);

  const contentModal = () => {
    if (!loading) {
      return <p>.....loading</p>;
    }
    return <h1>HOLA aqui va la info</h1>;
  };

  return (
    <ModalPortal isOpen={show} onClose={onClose}>
      {contentModal()}
    </ModalPortal>
  );
};
