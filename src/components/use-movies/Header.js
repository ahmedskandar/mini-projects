import React from 'react'

const Header = () => {
  return (
    <header className="flex bg-blue-600 rounded-lg text-white p-2 justify-between lg:p-6">
      <h1 className="font-bold text-lg lg:text-2xl">🍿 UseMovies</h1>
      <div>Search</div>
      <p>Found 0 results</p>
    </header>
  );
}

export default Header