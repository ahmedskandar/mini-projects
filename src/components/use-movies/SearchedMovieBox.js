import React from "react";
import MovieBox from "./MovieBox";
import SearchedMovieList from "./SearchedMovieList";

const SearchedMovieBox = ({ movies, isLoading }) => {
  console.log(isLoading)
  return (
    <MovieBox>
      {isLoading && <div className="">Loading...</div>}
      {!isLoading && <SearchedMovieList movies={movies} />}
    </MovieBox>
  );
};

export default SearchedMovieBox;
