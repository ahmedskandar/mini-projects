import React, { useState } from "react";
import SectionTitle from "../UI/SectionTitle";
import Header from "./Header";
import Movie from "./Movie";

const UseMovies = () => {
  const [movieName, setMovieName] = useState("");
  const [movieNumbers, setMovieNumbers] = useState(0);
  const handleMovieNumbersChange = (numberReturned) =>
    setMovieNumbers(numberReturned);
  const movieNameChangeHandler = (e) => {
    setMovieName(e.target.value);
  };


  return (
    <section className="mx-5 lg:mx-6">
      <SectionTitle>UseMovies</SectionTitle>
      <Header
        movieNumbers={movieNumbers}
        onMovieNameChange={movieNameChangeHandler}
      />
      <Movie
        onMovieNumbersChange={handleMovieNumbersChange}
        movieName={movieName}
      />
    </section>
  );
};

export default UseMovies;
