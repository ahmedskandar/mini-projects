import React from 'react'

function MovieStats({type}) {
  return (
    <div className="flex justify-between mt-2">
      {type === "avg" && <span>0 movies</span>}
      <span>⭐ 0.0</span>
      <span>🌟 0.0</span>
      <span>⏳ 0 min</span>
    </div>
  );
}

export default MovieStats