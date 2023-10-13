import React from "react";
import MovieStats from "../UI/MovieStats"

const WatchedMovieItem = ({ movie, onRemoveWatchedMovie }) => {
  const { id, name, image, starValue, duration } = movie;
  return (
    <li className="relative flex p-5 gap-10 bg-black/40">
      {/* <img src="" alt="" /> */}

      <img className="h-20" src={image} alt="" />

      <div className="flex flex-col gap-2 w-full">
        <h2 className="lg:text-xl">{name}</h2>
        <MovieStats duration={duration} starValue={starValue} />
      </div>

      <div className="text-xl bg-red-500 self-center px-2 rounded-full">
        <button onClick={() => onRemoveWatchedMovie(id)}>X</button>
      </div>

      {/* Absolute positioned <hr> */}
      <hr className="border-gray-300/60 w-full absolute bottom-0 left-0" />
    </li>
  );
};

export default WatchedMovieItem;
