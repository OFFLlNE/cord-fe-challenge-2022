import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import * as colors from '../../colors';
import { getPopularMovies, searchMovies } from '../../fetcher';
import movies from './movies';
import genres from './genres';

import SearchFilters from '../../components/searchfilter';
import MovieList from '../../components/movielist';

const Discover = () => {
  const [keywordSearchInput, setKeywordSearchInput] = useState('');
  const [yearSearchInput, setYearSearchInput] = useState(0);
  const [results, setResults] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [genreOptions, setGenreOptions] = useState([]);

  useEffect(() => {
    setResults(movies.results);
    setGenreOptions(genres);
    setTotalCount(movies.results.length);
    // getPopularMovies().then((result) => {
    //   // Result actually returns us what we wanted
    // });
  }, []);

  useEffect(() => {
    // TODO: Sort them by popularity
    // TODO: Add short delay after typing so we don't ping every time we search
    // if (keywordSearchInput) {
    //   searchMovies({ keyword: keywordSearchInput, year: yearSearchInput }).then(
    //     (movies) => {
    //       console.log('movies: ', movies);

    //       setTotalCount(movies.data.total_results);
    //       setResults(movies.data.results);
    //     }
    //   );
    // }
    console.log(
      'Searching for movies with parameters of: ',
      keywordSearchInput,
      yearSearchInput
    );
  }, [keywordSearchInput, yearSearchInput]);

  const updateSearchValues = ({ eventId, eventValue }) => {
    eventId === 'keywordSearchInput'
      ? setKeywordSearchInput(eventValue)
      : setYearSearchInput(eventValue);
  };

  return (
    <DiscoverWrapper>
      <MobilePageTitle>Discover</MobilePageTitle>{' '}
      {/* MobilePageTitle should become visible on mobile devices via CSS media queries*/}
      <TotalCount>{totalCount} movies</TotalCount>
      Current state: {keywordSearchInput} | {yearSearchInput}
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
          movies={results || []}
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
  @media (max-width: 768px) {
    display: block;
  }
`;

const TotalCount = styled.strong`
  display: block;
`;
