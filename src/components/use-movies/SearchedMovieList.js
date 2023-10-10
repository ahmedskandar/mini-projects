import React from "react";
import SearchedMovieItem from "./SearchedMovieItem";

const SearchedMovieList = ({ movies, onSelectedMovieIdChange }) => {
  return (
    <ul>
      {movies.map(({ name, year, image, id }) => (
        <SearchedMovieItem
          key={id}
          name={name}
          year={year}
          onSelectedMovieIdChange={onSelectedMovieIdChange}
          image={image}
          id={id}
        />
      ))}
    </ul>
  );
};

export default SearchedMovieList;
