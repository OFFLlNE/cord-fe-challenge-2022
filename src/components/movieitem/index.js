import React from 'react';
import styled from 'styled-components';

import * as colors from '../../colors';

export default function MovieItem({ movie, genres }) {
  const genreGenerator = (genreArray, availableGenres) => {
    const decodedGenres = [];
    genreArray.forEach((genreId) => {
      availableGenres.filter((obj) => {
        if (obj.id === genreId) {
          decodedGenres.push(obj.name);
        }
      });
    });

    return decodedGenres.join(' | ');
  };

  const imageUrl = `https://image.tmdb.org/t/p/original${movie.poster_path}`;

  return (
    <MovieItemWrapper>
      <LeftCont>
        <Logo src={imageUrl} />
      </LeftCont>
      <RightCont>
        <MovieTitleAndRating>
          <Title>{movie.title}</Title>
          <Rating>7.5</Rating>
        </MovieTitleAndRating>
        <MovieGenre>{genreGenerator(movie.genre_ids, genres)}</MovieGenre>
        <MovieDescription>{movie.overview.slice(0, 250)}</MovieDescription>
        <MovieReleaseDate>{movie.release_date}</MovieReleaseDate>
      </RightCont>
    </MovieItemWrapper>
  );
}

const MovieItemWrapper = styled.div`
  display: flex;
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
  margin-left: 20px;
`;

const Logo = styled.img`
  display: block;
  height: 150px;
`;

const MovieTitleAndRating = styled.div`
  display: flex;
`;

const Title = styled.h2`
  margin 0;
  margin-right:auto;
  font-size: 1.4em;
`;

const Rating = styled.strong`
  margin 0;
  color: white;
  background: ${colors.primaryColor};
  border-radius: 5px;
  align-self: self-start;
  padding: 5px;
  font-size: 0.9em;
`;

const MovieGenre = styled.p`
  margin: 0;
  font-size: 0.8em;
  color: ${colors.primaryColor};
`;

const MovieDescription = styled.p`
  color: ${colors.fontColor};
`;

const MovieReleaseDate = styled.p`
  font-size: 0.7em;
  color: ${colors.primaryColor};
`;
