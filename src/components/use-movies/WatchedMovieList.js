import React from "react";
import WatchedMovieItem from "./WatchedMovieItem";

const WatchedMovieList = ({ watchedMovies, onRemoveWatchedMovie }) => {
  return (
    <ul>
      {watchedMovies.map((movie, index) => (
        <WatchedMovieItem
          onRemoveWatchedMovie={onRemoveWatchedMovie}
          movie={movie}
          key={index}
        />
      ))}
    </ul>
  );
};

export default WatchedMovieList;
