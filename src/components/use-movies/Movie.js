import React, { useEffect, useState } from "react";
import SearchedMovieBox from "./SearchedMovieBox";
import WatchedMovieBox from "./WatchedMovieBox";
import { getMovie, getSelectedMovie } from "../util/Constants";

const Movie = ({ movieName, onMovieNumbersChange }) => {
  //Handles all movies
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  //Handles selected movie
  const [watchedMovies, setWatchedMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState({});
  const [isSelectedMovieLoading, setIsSelectedMovieLoading] = useState(false);
  const [selectedMovieError, setSelectedMovieError] = useState(null);

  const handleClearSelectedMovie = () => {
    setSelectedMovie({})
  }

  const handleSelectedMovieIdChange = (id) => {
    setSelectedMovieId(id);
  };

 const handleRemoveWatchedMovie = (id) => {
   setWatchedMovies((prevWatchedMovies) =>
     prevWatchedMovies.filter((movie) => movie.id !== id)
   );
 };

  //Selected Movies
  useEffect(() => {
    if (!selectedMovieId) return;
    const fetchSelectedMovie = async () => {
      setSelectedMovieError(false);
      setIsSelectedMovieLoading(true);
      try {
        const res = await fetch(getSelectedMovie(selectedMovieId));
        if (!res.ok) throw new Error("Something went wrong");
        const data = await res.json();
        if (!data) throw new Error("Error fetching movie");

        setSelectedMovie({
          id: data.imdbID,
          name: data.Title,
          releaseDate: data.Released,
          duration: data.Runtime,
          genre: data.Genre,
          rating: data.imdbRating,
          image: data.Poster,
          director: data.Director,
          actors: data.Actors,
          plot: data.Plot,
        });
      } catch (e) {
        setSelectedMovieError(e.message);
      } finally {
        setIsSelectedMovieLoading(false);
      }
    };

    fetchSelectedMovie();
  }, [selectedMovieId]);

  //All movies
  useEffect(() => {
    
    const fetchMovies = async () => {
      setSelectedMovieId(null);
      setSelectedMovie({})
      setError(null);
      if (movieName.length === 0) {
        setMovies([]);
        onMovieNumbersChange(0);
      }
      if (movieName.length < 3) return;
      setisLoading(true);
      //TRY-CATCH SHOULD BE INSIDE THE FUNCTION TO CATCH POTENTIAL ERRORS
      //AND ALSO FINALLY BLOCK MAY EXECUTE ASYNC AFTER THE FUNC HAD BEEN EXECUTED
      try {
        const res = await fetch(getMovie(movieName));

        if (!res.ok) throw new Error("Some error occurred");

        const data = await res.json();

        // if (!data.Search)
        //   throw new Error("No movies found, please search again");
        if (data.Response === "False")
          throw new Error("No movies found, please search again");
        setMovies(
          data.Search.map((movie) => ({
            id: movie.imdbID,
            name: movie.Title,
            year: movie.Year,
            image: movie.Poster,
          }))
        );
        onMovieNumbersChange(data.Search.length);
      } catch (e) {
        onMovieNumbersChange(0);
        setError(e.message);
      } finally {
        setisLoading(false);
      }
    };

    fetchMovies();
  }, [movieName, onMovieNumbersChange]);

  return (
    <main className="flex flex-col mt-5  text-white lg:gap-5 lg:flex-row">
      {!error && (
        <SearchedMovieBox
          className={`${selectedMovieId && "hidden"} lg:block`}
          onSelectedMovieIdChange={handleSelectedMovieIdChange}
          movies={movies}
          isLoading={isLoading}
        />
      )}
      {error && (
        <div className="overflow-hidden bg-gradient-to-b flex justify-center items-center from-purple-800 to-purple-600 flex-1 rounded-lg">
          <p className="text-white">{error}</p>
        </div>
      )}
      <WatchedMovieBox
        className={`${!selectedMovieId && "hidden"} lg:block`}
        isSelectedMovieLoading={isSelectedMovieLoading}
        selectedMovie={selectedMovie}
        selectedMovieError = {selectedMovieError}
        watchedMovies={watchedMovies}
        onClearSelectedMovie={handleClearSelectedMovie}
        setWatchedMovies={setWatchedMovies}
        onRemoveWatchedMovie={handleRemoveWatchedMovie}
      />
    </main>
  );
};

export default Movie;
