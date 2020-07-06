import * as React from 'react';
import { navigate } from '@reach/router';
import { Router } from '../interfaces/interfaces';
import { useInputValue } from '../hooks/useInputValue';



export const Login = ({ path }: Router) => {
  const user = useInputValue('');
  const pass = useInputValue('');
  const [error, setError] = React.useState(false);
  React.useEffect(() => { 
    const session = localStorage.getItem('session');
    if (session !== null) navigate('/main');
  }, []);

  const sessionValidator = e => {
    e.preventDefault();
    if (user.value === pass.value) {
      localStorage.setItem('session', 'hags');
      navigate('/main');
    } else { 
      setError(true);
    }
  };

  return (
    <>
      <form onSubmit={sessionValidator}>
        <input type="text" placeholder="User" {...user} />
        <input type="password" placeholder="Password" {...pass} />
        <button type="submit">
          Iniciar Sesión
        </button>
        {`${error ? 'Error en iniciar' : ''}`}
      </form>
    </>
  );
};
