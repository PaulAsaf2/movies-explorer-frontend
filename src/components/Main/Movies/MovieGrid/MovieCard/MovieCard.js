import { React, useState } from "react";

function MovieCard({ image, nameRU, description, duration }) {
  const [isLiked, setIsLiked] = useState(false)
  const likeStyle = `movie__like ${isLiked && 'movie__liked'}`

  return (
    <article className="movie">
      <img
        className="movie__image"
        src={image}
        alt={description}
      />
      <div className="movie__container">
        <h2 className="movie__title">{nameRU}</h2>
        <button
          className={likeStyle}
          onClick={() => setIsLiked(!isLiked)}
        ></button>
      </div>
      <div className="movie__line"></div>
      <p className="movie__duration">{duration}</p>
    </article>
  )
}

export default MovieCard;
