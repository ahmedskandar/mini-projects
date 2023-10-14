import React from 'react'

const Header = ({ onMovieNameChange, movieNumbers }) => {
  return (
    <header className="flex flex-col items-center bg-blue-600 rounded-lg text-white p-2 justify-between gap-5 lg:p-6 lg:flex-row lg:gap-0">
      <h1 className="font-bold text-xl lg:text-2xl">🍿 UseMovies</h1>
      <div>
        <input
          type="text"
          className="p-2 text-black bg-white rounded-md"
          placeholder="Search..."
          onChange={(e) => onMovieNameChange(e)}
        />
      </div>
      <p>Found {movieNumbers} results</p>
    </header>
  );
};

export default Header