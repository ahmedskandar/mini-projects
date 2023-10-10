import React from "react";

const SearchedMovieItem = ({
  name,
  year,
  image,
  id,
  onSelectedMovieIdChange,
}) => {

  const handleMovieSelect = () => {
    onSelectedMovieIdChange(id)
  }

  return (
    <li onClick={handleMovieSelect} className="relative flex cursor-pointer p-5 gap-10 bg-black/40">
      {/* <img src="" alt="" /> */}

      <img src={image} className="h-16" alt="" />

      <div className="flex flex-col gap-2 w-full">
        <h2 className="lg:text-xl">{name}</h2>
        <time dateTime="2015">📆 {year}</time>
      </div>

      {/* Absolute positioned <hr> */}
      <hr className="border-gray-300/60 w-full absolute bottom-0 left-0" />
    </li>
  );
};

export default SearchedMovieItem;
