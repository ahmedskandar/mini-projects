import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { starConfig } from "../util/Constants";

const SelectedMovie = ({ selectedMovie }) => {
  //Name, releaseData, duration, genre, rating
  const {
    name,
    releaseDate,
    duration,
    genre,
    rating,
    image,
    director,
    actors,
    plot,
  } = selectedMovie;
  const [starValue, setStarValue] = useState(0);
  const handleStarChange = (value) => {
    setStarValue(value);
  };

  return (
    <>
      <div className="flex items-center gap-5 bg-white/20">
        <img className="h-48" src={image} alt={name + "image"} />
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-bold lg:text-2xl">{name}</h2>
          <p className="flex gap-2 items-center ">
            {/* A NORMAL DOT WONT WORK, MUST USE THIS IEDNTIFIER */}
            {releaseDate} <span>&#8226;</span> {duration}
          </p>
          <p>{genre}</p>
          <p>⭐ {rating} IMDB rating </p>
        </div>
      </div>
      <div className="bg-black/40 flex flex-col items-center">
        <div className="flex justify-center items-center gap-5">
          <ReactStars onChange={handleStarChange} {...starConfig} />
          <span className="text-xl">{starValue}</span>
        </div>
        {starValue !== 0 && (
          <button className="bg-gradient-to-b mb-3 from-blue-700 px-4 py-2 rounded-md to-blue-600 hover:from-blue-900 hover:to-blue-800">
            Add to list
          </button>
        )}
      </div>
      <div className="mt-10 px-10 flex flex-col gap-8">
        <p>{plot}</p>
        <p>Actors: {actors}</p>
        <p>Directed by {director}</p>
      </div>
    </>
  );
};

export default SelectedMovie;
