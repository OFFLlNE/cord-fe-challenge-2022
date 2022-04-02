import axios from 'axios';

export default function getMovies() {
  const apiUrl = 'https://api.themoviedb.org/3/movie/popular';
  const apiKey = 'secretKey';
  const pageNumber = 1;

  const result = axios.get(
    `${apiUrl}?api_key=${apiKey}&language=en-US&page${pageNumber}`
  );
  return result;
}

// TODO getGenres() https://api.themoviedb.org/3/genre/movie/list?api_key=APIKEYHEREEEEE&language=en-US

// Get images: https://image.tmdb.org/t/p/original/qsdjk9oAKSQMWs0Vt5Pyfh6O4GZ.jpg

// TODO: All of your API requests should be in this file
// See the README file for more information about the APIs you would need to use
