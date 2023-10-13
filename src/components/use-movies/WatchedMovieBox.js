import React from "react";
import MovieBox from "./MovieBox";
import WatchedMovieSummary from "./WatchedMovieSummary";
import WatchedMovieList from "./WatchedMovieList";
import SelectedMovie from "./SelectedMovie";

const WatchedMovieBox = ({
  selectedMovie,
  isSelectedMovieLoading,
  className,
  watchedMovies,
  setWatchedMovies,
  onClearSelectedMovie,
  onRemoveWatchedMovie,
  selectedMovieError,
}) => {
  return (
    <MovieBox className={className}>
      {Object.keys(selectedMovie).length === 0 && (
        <>
          <WatchedMovieSummary watchedMovies={watchedMovies} />
          <WatchedMovieList
            onRemoveWatchedMovie={onRemoveWatchedMovie}
            watchedMovies={watchedMovies}
          />
        </>
      )}
      {isSelectedMovieLoading && (
        <div className="text-center mt-5">
          <p>LOADING...</p>
        </div>
      )}
      {selectedMovieError && (
        <div className="text-center mt-5">
          <p>ERROR SOMETHING WRONG HAPPENED</p>
        </div>
      )}
      {Object.keys(selectedMovie).length !== 0 &&
        !isSelectedMovieLoading &&
        !selectedMovieError && (
          <SelectedMovie
            onClearSelectedMovie={onClearSelectedMovie}
            selectedMovie={selectedMovie}
            setWatchedMovies={setWatchedMovies}
          />
        )}
    </MovieBox>
  );
};

export default WatchedMovieBox;
