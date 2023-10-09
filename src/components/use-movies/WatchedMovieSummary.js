import React from "react";
import MovieStats from "../UI/MovieStats"

const WatchedMovieSummary = () => {
  return (
    <div className="p-5 bg-white/20">
      <h2>MOVIES YOU WATCHED</h2>
     <MovieStats type={"avg"}/>
    </div>
  );
};

export default WatchedMovieSummary;
