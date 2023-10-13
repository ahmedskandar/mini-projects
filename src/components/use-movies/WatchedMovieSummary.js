import React from "react";
import MovieStats from "../UI/MovieStats";

const WatchedMovieSummary = ({ watchedMovies }) => {

  const durationArray = watchedMovies.map(movie => movie.duration)

const numberDurationArray = durationArray.map((text) => {
  const matches = text.match(/\d+/); // Use regular expression to find numbers
  return matches ? parseInt(matches[0], 10) : 0; // Parse the integer part and handle non-integer values
});

const avgDuration =
  numberDurationArray.reduce((acc, num) => acc + num, 0) / watchedMovies.length;
  
  const starValuesArray = watchedMovies.map((movie) => movie.starValue);
  const avgStarValue =
  starValuesArray.reduce((acc, num) => acc + num, 0) / watchedMovies.length;

  console.log(avgDuration, avgStarValue)

  return (
    <div className="p-5 bg-white/20">
      <h2>MOVIES YOU WATCHED</h2>
      <MovieStats
        starValue={avgStarValue.toFixed(1)}
        duration={avgDuration.toFixed(1) + " min"}
        movieCount={watchedMovies.length}
        type={"avg"}
      />
    </div>
  );
};

export default WatchedMovieSummary;
