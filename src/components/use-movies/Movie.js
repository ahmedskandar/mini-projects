import React, { useEffect, useState } from "react";
import SearchedMovieBox from "./SearchedMovieBox";
import WatchedMovieBox from "./WatchedMovieBox";
import { getMovie } from "../util/Constants";

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setisLoading] = useState(true);

  //In arrays falsy doesnt apply you have to check explicitly for !==0

  // useEffect(() => {
  //   const fetchMoviesData = async () => {
  //     const res = await fetch(getMovie("super"));
  //     if(!res.ok) throw new Error("Some error occurred")
  //     const data = await res.json();
  //     if(!data.Search) throw new Error("No movies found")
  //     setMovies(data.Search.map(movie => ({name: movie.Title, year: movie.Year, image: movie.Poster})));
  //   };

  //   try {
  //   setError(null);
  //     fetchMoviesData()
  //   } catch (e) {
  //     setError(e.message);
  //   } finally {
  //     setisLoading(false)
  //   }
  // }, []);
  useEffect(() => {

    const fetchMovies = async () => {
      setError(null);
      //TRY-CATCH SHOULD BE INSIDE THE FUNCTION TO CATCH POTENTIAL ERRORS
      //AND ALSO FINALLY BLOCK MAY EXECUTE ASYNC AFTER THE FUNC HAD BEEN EXECUTED
      try {
        const res = await fetch(getMovie("bat"));

        if (!res.ok) throw new Error("Some error occurred");

        const data = await res.json();

        if (!data.Search) throw new Error("No movies found");
        console.log(data.Search);
        setMovies(
          data.Search.map((movie) => ({
            name: movie.Title,
            year: movie.Year,
            image: movie.Poster,
          }))
        );

      } catch (e) {
        setError(e.message);
      } finally {
        setisLoading(false);
      }
    };

    fetchMovies();
    
  }, []);

  if (error) return <p>Sorry</p>;

  return (
    <main className="flex flex-col mt-5  text-white lg:gap-5 lg:flex-row">
      <SearchedMovieBox movies={movies} isLoading={isLoading} />
      <WatchedMovieBox movies={movies} />
    </main>
  );
};

export default Movie;
