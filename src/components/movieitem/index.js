import React from 'react';
import styled from 'styled-components';

import turningRed from './turningRed.jpeg';

export default function MovieItem({ movie, genres }) {
  return (
    // TODO: Complete the MovieItem component
    // Implement actual poster for each movie
    // Implement rating
    // Implement description
    <MovieItemWrapper>
      <LeftCont>
        <Logo src={turningRed} />
      </LeftCont>
      <RightCont>
        <Title>{movie.title}</Title>
        <p>{movie.genre_ids.map((genreId) => '#' + genreId)}</p>
        <p>{movie.release_date}</p>
      </RightCont>
    </MovieItemWrapper>
  );
}

const MovieItemWrapper = styled.div`
  position: relative;
  background-color: white;
  border-radius: 5px;
  padding: 20px;
  margin: 15px 0;
`;

const LeftCont = styled.div`
  display: inline-block;
`;

const RightCont = styled.div`
  display: inline-block;
`;

const Logo = styled.img`
  width: 70px;
`;

const Title = styled.h2`
  font-size: 1.4;
`;
