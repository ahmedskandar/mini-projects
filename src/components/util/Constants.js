const KEY = "f84fc31d";
export const getMovie = (query) =>
  `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`;