import React from 'react';
import styled from 'styled-components';

import MovieItem from '../movieitem';

export default function MovieList({ movies, genres, filteringKeyword }) {
  return (
    <MoviesWrapper>
      {movies
        .filter(
          (movie) =>
            movie.title
              .toLowerCase()
              .includes(filteringKeyword.toLowerCase()) ||
            filteringKeyword === ''
        )
        .map((movie) => (
          <MovieItem key={movie.id} movie={movie} genres={genres} />
        ))}
    </MoviesWrapper>
  );
}

const MoviesWrapper = styled.div`
  position: relative;
`;
