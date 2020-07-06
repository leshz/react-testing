import * as React from 'react';
import { Router, Data } from '../interfaces/interfaces';
import { HeaderNav } from '../components/Header';
import { useInputValue } from '../hooks/useInputValue';

import { MovieContainer } from '../components/MoviePreviewContainer';

export const Search = (props: Router) => {
  const search = useInputValue('');
  const [data, setData] = React.useState<Data[]>([
    {
      Title: 'Batman Begins',
      Year: '2005',
      imdbID: 'tt0372784',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BZmUwNGU2ZmItMmRiNC00MjhlLTg5YWUtODMyNzkxODYzMmZlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg',
    },
    {
      Title: 'Batman v Superman: Dawn of Justice',
      Year: '2016',
      imdbID: 'tt2975590',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
    },
    {
      Title: 'Batman',
      Year: '1989',
      imdbID: 'tt0096895',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg',
    },
    {
      Title: 'Batman Returns',
      Year: '1992',
      imdbID: 'tt0103776',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BOGZmYzVkMmItM2NiOS00MDI3LWI4ZWQtMTg0YWZkODRkMmViXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_SX300.jpg',
    },
    {
      Title: 'Batman Forever',
      Year: '1995',
      imdbID: 'tt0112462',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNDdjYmFiYWEtYzBhZS00YTZkLWFlODgtY2I5MDE0NzZmMDljXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
    },
    {
      Title: 'Batman & Robin',
      Year: '1997',
      imdbID: 'tt0118688',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMGQ5YTM1NmMtYmIxYy00N2VmLWJhZTYtN2EwYTY3MWFhOTczXkEyXkFqcGdeQXVyNTA2NTI0MTY@._V1_SX300.jpg',
    },
    {
      Title: 'The Lego Batman Movie',
      Year: '2017',
      imdbID: 'tt4116284',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_SX300.jpg',
    },
    {
      Title: 'Batman: The Animated Series',
      Year: '1992–1995',
      imdbID: 'tt0103359',
      Type: 'series',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMjFiNzk3NzctY2E0OS00NTVkLThlMDUtODVlNmRmZWI1ZjMzXkEyXkFqcGdeQXVyNTQ0NjQzNTE@._V1_SX300.jpg',
    },
    {
      Title: 'Batman: Under the Red Hood',
      Year: '2010',
      imdbID: 'tt1569923',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNmY4ZDZjY2UtOWFiYy00MjhjLThmMjctOTQ2NjYxZGRjYmNlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
    },
    {
      Title: 'Batman: The Dark Knight Returns, Part 1',
      Year: '2012',
      imdbID: 'tt2313197',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMzIxMDkxNDM2M15BMl5BanBnXkFtZTcwMDA5ODY1OQ@@._V1_SX300.jpg',
    },
  ]);
  const [error, setError] = React.useState(false);
  const handlerClickSubmitButton = () => {
    setError(false);
    if (search.value !== '') {
      fetch(`http://www.omdbapi.com/?apikey=f12ba140&s=${search.value}`)
        .then((success) => success.json())
        .then((resp) => {
          if (resp.Response === 'True') {
            setData(resp.Search);
          } else {
            setError(true);
          }
        });
    }
  };

  return (
    <>
      <HeaderNav />
      <input type="text" placeholder="Buscar pelicula" {...search} />
      <button onClick={handlerClickSubmitButton} type="button">
        Buscar
      </button>
      <MovieContainer error={error} data={data} />
    </>
  );
};
