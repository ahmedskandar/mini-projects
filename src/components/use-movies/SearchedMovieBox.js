import React from "react";
import MovieBox from "./MovieBox";
import SearchedMovieList from "./SearchedMovieList";

const SearchedMovieBox = ({ movies, isLoading, onSelectedMovieIdChange, className }) => {
  return (
    <MovieBox className={className}>
      {isLoading && (
        <div className="flex justify-center items-center h-full">
          LOADING...
        </div>
      )}
      {!isLoading && (
        <SearchedMovieList
          onSelectedMovieIdChange={onSelectedMovieIdChange}
          movies={movies}
        />
      )}
    </MovieBox>
  );
};

export default SearchedMovieBox;
