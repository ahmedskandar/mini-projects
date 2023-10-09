import React from "react";
import WatchedMovieItem from "./WatchedMovieItem";

const WatchedMovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map((movie, index) => (
        <React.Fragment key={index}>
          <WatchedMovieItem />
        </React.Fragment>
      ))}
    </ul>
  );
};

export default WatchedMovieList;
