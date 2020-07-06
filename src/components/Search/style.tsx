import styled from 'styled-components';

export const FormSearch = styled.form`
  display: flex;
  flex-wrap: nowrap;
  margin: 30px auto;
  width: 100%;
  max-width: 320px;
  border: 1px solid var(--yellow);
  color: #fff;
  background: var(--black);
  border-radius: 5px;
  overflow: hidden;
`;

export const Input = styled.input`
  font-size: 16px;
  outline: none;
  line-height: 2;
  padding: 2px 5px;
  width: 100%;
  border: 2px solid transparent;
  background: transparent;
  color: #fff;
  &::placeholder {
    color: #fff;
  }
`;

export const Button = styled.button`
  background: var(--yellow);
  padding: 0px 15px;
  border: 1px solid transparent;
  color: #fff;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: var(--black);
    color: var(--yellow);
  }
`;
