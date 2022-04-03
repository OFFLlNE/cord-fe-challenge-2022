import axios from 'axios';

export function getPopularMovies() {
  const apiUrl = 'https://api.themoviedb.org/3/movie/popular';
  const apiKey = 'secretKey';
  const pageNumber = 1;

  const result = axios.get(
    `${apiUrl}?api_key=${apiKey}&language=en-US&page${pageNumber}`
  );
  return result;
}

//https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&query=red&page=1&include_adult=false&year=1990
export function searchMovies({ keyword, year }) {
  const apiUrl = 'https://api.themoviedb.org/3/search/movie';
  const apiKey = '14a0aa93a47d812f31310217bcafcd60';
  const keywordParameter = keyword.length > 0 ? `&query=${keyword}` : '';
  const yearParameter = year > 1877 ? `&primary_release_year=${year}` : '';

  const result = axios.get(
    `${apiUrl}?api_key=${apiKey}&language=en-US${keywordParameter}&page=1&include_adult=false${yearParameter}`
  );
  return result;
}

// TODO getGenres() https://api.themoviedb.org/3/genre/movie/list?api_key=APIKEYHEREEEEE&language=en-US

// Get images: https://image.tmdb.org/t/p/original/qsdjk9oAKSQMWs0Vt5Pyfh6O4GZ.jpg

// TODO: All of your API requests should be in this file
// See the README file for more information about the APIs you would need to use
