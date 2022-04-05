import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { getPopularMovies, getGenres, searchMovies } from '../../fetcher';

import SearchFilters from '../../components/searchfilter';
import MovieList from '../../components/movielist';

const Discover = () => {
  const [keywordSearchInput, setKeywordSearchInput] = useState('');
  const [yearSearchInput, setYearSearchInput] = useState(0);
  const [movies, setMovies] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [genreOptions, setGenreOptions] = useState([]);

  useEffect(() => {
    getPopularMovies().then((moviesResponse) => {
      setMovies(moviesResponse.data.results);
      setTotalCount(moviesResponse.data.results.length);
    });
    getGenres().then((genresResponse) =>
      setGenreOptions(genresResponse.data.genres)
    );
  }, []);

  useEffect(() => {
    if (keywordSearchInput || yearSearchInput) {
      searchMovies({ keyword: keywordSearchInput, year: yearSearchInput }).then(
        (movies) => {
          console.log('movies: ', movies);

          setTotalCount(movies.data.total_results);
          setMovies(movies.data.results);
        }
      );
    }
  }, [keywordSearchInput, yearSearchInput]);

  const updateSearchValues = ({ eventId, eventValue }) => {
    eventId === 'keywordSearchInput'
      ? setKeywordSearchInput(eventValue)
      : setYearSearchInput(eventValue);
  };

  return (
    <DiscoverWrapper>
      <MobilePageTitle>Discover</MobilePageTitle>{' '}
      {totalCount > 0 && <TotalCount>{totalCount} movies</TotalCount>}
      <MovieFilters>
        <SearchFilters
          genres={genreOptions}
          onSearch={(event) =>
            updateSearchValues({
              eventId: event.target.id,
              eventValue: event.target.value,
            })
          }
        />
      </MovieFilters>
      <MovieResults>
        <MovieList
          movies={movies || []}
          genres={genreOptions || []}
          filteringKeyword={keywordSearchInput}
        />
      </MovieResults>
    </DiscoverWrapper>
  );
};

export default Discover;

const DiscoverWrapper = styled.main`
  padding: 35px;
`;

const MovieResults = styled.div`
  display: inline-block;
  width: calc(100% - 295px);
`;

const MovieFilters = styled.div`
  width: 280px;
  float: right;
  margin-top: 15px;
`;

const MobilePageTitle = styled.h1`
  display: none;
  @media (max-width: 1024px) {
    display: block;
  }
`;

const TotalCount = styled.strong`
  display: block;
`;
