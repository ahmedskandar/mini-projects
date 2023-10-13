import React from 'react'

function MovieStats({type, starValue, duration, movieCount = 0}) {
  return (
    <div className="flex justify-between mt-2">
      {type === "avg" && <span>{movieCount} movies</span>}
      <span>⭐ {isNaN(starValue) ? "0.0" : starValue}</span>
      <span>🌟 0.0</span>
      <span>⏳ {duration ? duration : "0 min"}</span>
    </div>
  );
}

export default MovieStats