import styled from 'styled-components';

export const MovieWrap = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  margin: 30px 15px;
  h2 {
    width: 100%;
    text-align: center;
  }
`;

export const ErrorMessage = styled.h3`
  font-size: 25px;
  font-weight: bold;
  width: 100%;
  text-align: center;
  color: var(--red);
`;
