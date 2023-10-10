import React from "react";
import MovieBox from "./MovieBox";
import WatchedMovieSummary from "./WatchedMovieSummary";
import WatchedMovieList from "./WatchedMovieList";
import SelectedMovie from "./SelectedMovie";

const WatchedMovieBox = ({ selectedMovie, isSelectedMovieLoading, className, movies }) => {
  return (
    <MovieBox className={className}>
      {Object.keys(selectedMovie).length === 0 && (
        <>
          <WatchedMovieSummary />
          <WatchedMovieList />
        </>
      )}
      {isSelectedMovieLoading && (
        <div className="text-center mt-5">
          <p>LOADING...</p>
        </div>
      )}
      {Object.keys(selectedMovie).length !== 0 && !isSelectedMovieLoading && (
        <SelectedMovie selectedMovie={selectedMovie} />
      )}
    </MovieBox>
  );
};

export default WatchedMovieBox;
