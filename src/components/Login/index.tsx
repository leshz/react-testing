import * as React from 'react';
import { useInputValue } from '../../hooks/useInputValue';
import { Form, Input, Button, Error } from './style';

export const Login = (props) => {
  const { auth } = props;
  const user = useInputValue('');
  const pass = useInputValue('');
  const [error, setError] = React.useState(false);

  const sessionValidator = (e) => {
    e.preventDefault();
    if (user.value === pass.value && user.value !== '' && pass.value !== '') {
      sessionStorage.setItem('session', 'Yeah');
      auth();
    } else {
      setError(true);
    }
  };

  return (
    <Form onSubmit={sessionValidator}>
      <h2>Iniciar Sesion</h2>
      {error && <Error> Error al iniciar </Error>}
      <Input type="text" placeholder="Usuario" {...user} />
      <Input type="password" placeholder="Contraseña" {...pass} />
      <Button type="submit">Iniciar Sesión</Button>
    </Form>
  );
};
