import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import * as colors from '../../colors';
import getMovies from '../../fetcher';
import movies from './movies';
import genres from './genres';

import SearchFilters from '../../components/searchfilter';
import MovieList from '../../components/movielist';

const Discover = () => {
  const [keyword, setKeyword] = useState('');
  const [year, setYear] = useState(0);
  const [results, setResults] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [genreOptions, setGenreOptions] = useState([]);
  const [ratingOptions, setRatingOptions] = useState([
    { id: 7.5, name: 7.5 },
    { id: 8, name: 8 },
    { id: 8.5, name: 8.5 },
    { id: 9, name: 9 },
    { id: 9.5, name: 9.5 },
    { id: 10, name: 10 },
  ]);
  const [languageOptions, setLanguageOptions] = useState([
    { id: 'GR', name: 'Greek' },
    { id: 'EN', name: 'English' },
    { id: 'RU', name: 'Russian' },
    { id: 'PO', name: 'Polish' },
  ]);

  useEffect(() => {
    setResults(movies.results);
    setGenreOptions(genres);
    setTotalCount(movies.results.length);
    // getMovies().then((result) => {
    //   // Result actually returns us what we wanted
    // });
  }, []);

  // TODO: Preload and set the popular movies and movie genres when page loads

  // TODO: Update search results based on the keyword and year inputs

  return (
    <DiscoverWrapper>
      <MobilePageTitle>Discover</MobilePageTitle>{' '}
      {/* MobilePageTitle should become visible on mobile devices via CSS media queries*/}
      <TotalCount>{totalCount} movies</TotalCount>
      <MovieFilters>
        <SearchFilters
          genres={genreOptions}
          ratings={ratingOptions}
          languages={languageOptions}
          searchMovies={(keyword, year) => this.searchMovies(keyword, year)}
          onSearch={(e) => {
            setKeyword(e);
          }}
        />
      </MovieFilters>
      <MovieResults>
        <MovieList
          movies={results || []}
          genres={genreOptions || []}
          filteringKeyword={keyword}
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
`;

const TotalCount = styled.strong`
  display: block;
`;
