import React from "react";
import MovieBox from "./MovieBox";
import WatchedMovieSummary from "./WatchedMovieSummary";
import WatchedMovieList from "./WatchedMovieList";

const WatchedMovieBox = ({movies}) => {
  return (
    <MovieBox>
      <WatchedMovieSummary />
      <WatchedMovieList movies={movies} />
    </MovieBox>
  );
};

export default WatchedMovieBox;
