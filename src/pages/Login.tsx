import * as React from 'react';
import { Login } from '../components/Login';
import { Container } from '../containers';

export const LoginPage = (props) => {
  const { auth } = props;
  return (
    <Container head={false}>
      <Login auth={auth} />
    </Container>
  );
};
