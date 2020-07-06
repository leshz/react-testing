import * as React from 'react';
import { useInputValue } from '../hooks/useInputValue';

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
    <form onSubmit={sessionValidator}>
      <input type="text" placeholder="User" {...user} />
      <input type="password" placeholder="Password" {...pass} />
      <button type="submit">Iniciar Sesión</button>
      {`${error ? 'Error en iniciar' : ''}`}
    </form>
  );
};
