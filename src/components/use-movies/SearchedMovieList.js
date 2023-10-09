import React from "react";
import SearchedMovieItem from "./SearchedMovieItem";

const SearchedMovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ name, year, image }, index) => (
        <React.Fragment key={index}>
          <SearchedMovieItem name={name} year={year} image={image} />
        </React.Fragment>
      ))}
    </ul>
  );
};

export default SearchedMovieList;
