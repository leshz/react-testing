import * as React from 'react';
import { Router } from '../interfaces/interfaces';

export const Search = ({ path } : Router) => { 

  return (
    <>
      <input type="text" placeholder="Buscar pelicula" />
      <button type="button">Buscar</button>
    </>
  );

};