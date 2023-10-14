const KEY = "7cc71b04";
export const getMovie = (query) =>
  `https://www.omdbapi.com/?apikey=${KEY}&s=${query}`;

export const getSelectedMovie = (id) =>
  `https://www.omdbapi.com/?i=${id}&apikey=${KEY}`;

export const starConfig = {
  size: 30,
  count: 10,
  isHalf: false,
  color: "white",
  activeColor: "yellow",
};

export const getCurrency = (amount, from, to) => {
  return `https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`;
};
