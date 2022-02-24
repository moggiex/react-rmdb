
// Configuration for TMDB API
// Read more about the API here: https://developers.themoviedb.org/

const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = process.env.REACT_APP_API_KEY;
const API_CACHE_TIME = 6000;  // time in ms see https://www.google.com/search?q=ms+to+minutes

// console.log(process.env.REACT_APP_API_KEY);
// process.exit();

// Added

const SITE_NAME = "Movies Database";
const SITE_TITLE_SEPARATOR = " | ";
const SITE_DEFAULT_META_DESCRIPTION = "The latest movies, directors, releases and actors database";

const URL_PREFIX_MOVIE = 'movie';
const URL_PREFIX_PERSON = 'person';

const SEARCH_BASE_URL = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=`;
const POPULAR_BASE_URL = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US`;
// For login and voting
const REQUEST_TOKEN_URL = `${API_URL}authentication/token/new?api_key=${API_KEY}`;
const LOGIN_URL = `${API_URL}authentication/token/validate_with_login?api_key=${API_KEY}`;
const SESSION_ID_URL = `${API_URL}authentication/session/new?api_key=${API_KEY}`;

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/';
// Sizes: w300, w780, w1280, original
const BACKDROP_SIZE = 'w1280';
// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE = 'w780';

export {
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
  REQUEST_TOKEN_URL,
  LOGIN_URL,
  SESSION_ID_URL,
  URL_PREFIX_MOVIE,
  URL_PREFIX_PERSON,
  API_CACHE_TIME,
  SITE_NAME,
  SITE_TITLE_SEPARATOR,
  SITE_DEFAULT_META_DESCRIPTION
};
