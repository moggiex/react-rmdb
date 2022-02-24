import {
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  API_URL,
  API_KEY,
  REQUEST_TOKEN_URL,
  LOGIN_URL,
  SESSION_ID_URL,
  API_CACHE_TIME
} from './config';

import { isDev } from './helpers'

const defaultConfig = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
};

const cache = [];

const apiSettings = {

  fetchMovies: async (searchTerm, page) => {
    const endpoint = searchTerm
      ? `${SEARCH_BASE_URL}${searchTerm}&page=${page}`
      : `${POPULAR_BASE_URL}&page=${page}`;

    // console.log(
    //   cache[endpoint].cache_ttl,
    //   cache[endpoint].cache_ttl - Date.now(),
    //   isCacheValid(cache[endpoint].cache_ttl)

    // )

    if (cache[endpoint] && isCacheValid(cache[endpoint].cache_ttl)) {
      if (isDev) console.log("fetchMovies: FOUND cached endpoint:" + endpoint);
      return cache[endpoint];
    }

    if (isDev) console.log("fetchMovies: NOT cached endpoint:" + endpoint);
    const res = await (await fetch(endpoint)).json();
    res.cache_ttl = Date.now();
    return cache[endpoint] = res;

    // console.log(cache);
    // return await (await fetch(endpoint)).json();
  },
  fetchMovie: async movieId => {
    const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;

    if (cache[endpoint] && isCacheValid(cache[endpoint].cache_ttl)) {
      if (isDev) console.log("fetchMovie: FOUND cached endpoint:" + endpoint);
      return cache[endpoint];
    }

    if (isDev) console.log("fetchMovie: NOT cached endpoint:" + endpoint);
    const res = await (await fetch(endpoint)).json();
    res.cache_ttl = Date.now();
    return cache[endpoint] = res;

    // console.log("fetchMovie: NOT cached endpoint:" + endpoint);
    // return cache[endpoint] = await (await fetch(endpoint)).json();
    // return await (await fetch(endpoint)).json();
  },
  fetchCredits: async movieId => {
    const endpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;

    if (cache[endpoint] && isCacheValid(cache[endpoint].cache_ttl)) {
      if (isDev) console.log("fetchCredits: FOUND cached endpoint:" + endpoint);
      return cache[endpoint];
    }

    if (isDev) console.log("fetchCredits: NOT cached endpoint:" + endpoint);
    const res = await (await fetch(endpoint)).json();
    res.cache_ttl = Date.now();
    return cache[endpoint] = res;

    return await (await fetch(endpoint)).json();
  },
  // Added
  fetchPerson: async personId => {
    const endpoint = `${API_URL}person/${personId}s?api_key=${API_KEY}`;
    return await (await fetch(endpoint)).json();
  },
  // Bonus material below for login
  getRequestToken: async () => {
    const reqToken = await (await fetch(REQUEST_TOKEN_URL)).json();
    return reqToken.request_token;
  },
  authenticate: async (requestToken, username, password) => {
    const bodyData = {
      username,
      password,
      request_token: requestToken
    };
    // First authenticate the requestToken
    const data = await (
      await fetch(LOGIN_URL, {
        ...defaultConfig,
        body: JSON.stringify(bodyData)
      })
    ).json();
    // Then get the sessionId with the requestToken
    if (data.success) {
      const sessionId = await (
        await fetch(SESSION_ID_URL, {
          ...defaultConfig,
          body: JSON.stringify({ request_token: requestToken })
        })
      ).json();
      return sessionId;
    }
  },
  rateMovie: async (sessionId, movieId, value) => {
    const endpoint = `${API_URL}movie/${movieId}/rating?api_key=${API_KEY}&session_id=${sessionId}`;

    const rating = await (
      await fetch(endpoint, {
        ...defaultConfig,
        body: JSON.stringify({ value })
      })
    ).json();

    return rating;
  }
};
/**
 * 
 * @param {*} oldTime as date.Now() value
 */
const isCacheValid = (oldTime) => {

  if (!oldTime) return false;

  return Date.now() - oldTime < API_CACHE_TIME ? true : false;

}


export default apiSettings;
