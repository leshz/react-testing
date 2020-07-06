import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  max-width: 350px;
  margin: 30vh auto;
  padding: 30px;
  justify-content: center;
  align-items: flex-start;
  border-radius: 5px;
  border: 1px solid var(--yellow);
  background: var(--black);
  box-shadow: 0px 0px 11px 2px rgba(0, 0, 0, 0.41);
  h2 {
    color: #fff;
  }
`;

export const Input = styled.input`
  font-size: 16px;
  outline: none;
  line-height: 2;
  padding: 2px 5px;
  margin: 15px 0 0;
  width: 100%;
  border: 2px solid #fff;
`;

export const Button = styled.button`
  margin: 30px 0 0;
  width: 100%;
  font-size: 18px;
  padding: 11px 5px;
  background: var(--black);
  color: var(--yellow);
  border: 1px solid var(--yellow);
`;

export const Error = styled.div`
  text-align: center;
  color: var(--red);
  margin: 15px 0;
  width: 100%;
  margin-top: 20px;
`;
