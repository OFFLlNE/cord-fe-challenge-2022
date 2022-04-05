import axios from 'axios';

const apiKey = '14a0aa93a47d812f31310217bcafcd60'; // In the future move that to be user-entered

export function getPopularMovies() {
  const apiUrl = 'https://api.themoviedb.org/3/movie/popular';
  const pageNumber = 2;

  const result = axios.get(
    `${apiUrl}?api_key=${apiKey}&language=en-US&page${pageNumber}`
  );
  return result;
}

export function getGenres() {
  const apiUrl = 'https://api.themoviedb.org/3/genre/movie/list';

  const result = axios.get(`${apiUrl}?api_key=${apiKey}&language=en-US`);
  return result;
}

export function searchMovies({ keyword, year }) {
  const apiUrl = 'https://api.themoviedb.org/3/search/movie';
  const keywordParameter = keyword.length > 0 ? `&query=${keyword}` : '';
  const yearParameter = year > 1877 ? `&primary_release_year=${year}` : '';

  const result = axios.get(
    `${apiUrl}?api_key=${apiKey}&language=en-US${keywordParameter}&page=1&include_adult=false${yearParameter}`
  );
  return result;
}
