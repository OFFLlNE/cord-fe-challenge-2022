import React from 'react';
import styled, { css } from 'styled-components';

import AccordionFilter from '../accordionfilter';
import SearchBar from '../../components/searchbar';

import SearchIcon from '../../images/search-icon-yellow.png';
import YearIcon from '../../images/year-icon.png';

export default function SearchFilters({ genres, onSearch }) {
  return (
    <FiltersWrapper>
      <SearchFiltersCont className="search_inputs_cont" marginBottom>
        <SearchBar
          id="keywordSearchInput"
          type="text"
          icon={{ src: SearchIcon, alt: 'Magnifying glass' }}
          placeholder="Search for movies"
          onChange={onSearch}
        />
        <SearchBar
          id="yearSearchInput"
          type="number"
          icon={{ src: YearIcon, alt: 'Calendar icon' }}
          placeholder="Year of release"
          onChange={onSearch}
        />
      </SearchFiltersCont>
      <SearchFiltersCont>
        <CategoryTitle>Movies</CategoryTitle>
        <AccordionFilter genres={genres} />
      </SearchFiltersCont>
    </FiltersWrapper>
  );
}

const FiltersWrapper = styled.div`
  position: relative;
`;

const SearchFiltersCont = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;

  .search_bar_wrapper:first-child {
    margin-bottom: 15px;
  }

  ${(props) =>
    props.marginBottom &&
    css`
      margin-bottom: 15px;
    `}
`;

const CategoryTitle = styled.h3`
  margin: 0 0 15px 0;
`;
