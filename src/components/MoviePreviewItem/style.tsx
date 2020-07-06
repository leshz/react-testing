import styled from 'styled-components';

export const MovieItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-basis: 15%;
  flex: 15%;
  max-width: 15%;
  margin: 10px 20px 30px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.45);
  border-radius: 5px;
  overflow: hidden;
  background: var(--black);
  border: 1px solid transparent;
  transition: all 0.3s ease-in-out;
  &:hover {
    border: 1px solid var(--yellow);
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.59);
  }

  img {
    width: 100%;
    height: 20vw;
    object-fit: cover;
    object-position: top;
  }
  h3,
  span {
    color: var(--yellow);
  }
`;

export const TitleItem = styled.h3`
  color: var(--yellow);
  font-size: 20px;
`;

export const Button = styled.button`
  cursor: pointer;
  outline: none;
  display: inline;
  padding: 5px;
  border: 1px solid transparent;
  width: 50%;
  background: var(--black);
  color: #fff;
  font-size: 16px;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: var(--yellow);
    color: var(--black);
  }
`;

export const ButtonWrap = styled.div`
  align-self: flex-end;
  width: 100%;
  margin-top: 25px;
`;

export const Infomation = styled.div`
  padding: 15px 10px;
  width: 100%;
`;
