import React from 'react'

function MovieStats({type}) {
  return (
    <div className="flex justify-between mt-2">
      {type === "avg" && <span>1 movies</span>}
      <span>⭐ 8.8</span>
      <span>🌟 10.0</span>
      <span>⏳ 148 min</span>
    </div>
  );
}

export default MovieStats