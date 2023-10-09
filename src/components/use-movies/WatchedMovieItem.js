import React from "react";
import MovieStats from "../UI/MovieStats"

const WatchedMovieItem = () => {
  return (
    <li className="relative flex cursor-pointer p-5 gap-10 bg-black/40">
      {/* <img src="" alt="" /> */}
      <span>MOVIE</span>

      <div className="flex flex-col gap-2 w-full">
        <h2 className="lg:text-xl">Interstellar</h2>
        <MovieStats />
      </div>

      {/* Absolute positioned <hr> */}
      <hr className="border-gray-300/60 w-full absolute bottom-0 left-0" />
    </li>
  );
};

export default WatchedMovieItem;
