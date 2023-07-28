import { React, useState } from "react";

function MovieCard({ movie }) {
  const [isLiked, setIsLiked] = useState(false)
  const likeStyle = `movie__like ${isLiked && 'movie__liked'}`

  const imageLink = `https://api.nomoreparties.co/${movie.image.url}`
  const hours = Math.floor(movie.duration / 60)
  const minutes = movie.duration % 60

  return (
    <article className="movie">
      <a href={movie.trailerLink} target="blank">
        <img
          className="movie__image"
          src={imageLink}
          alt={movie.description} />
      </a>
      <div className="movie__container">
        <h2 className="movie__title">{movie.nameRU}</h2>
        <button
          className={likeStyle}
          onClick={() => setIsLiked(!isLiked)}
        ></button>
      </div>
      <div className="movie__line"></div>
      <p className="movie__duration">
        {hours > 0 ? `${hours}ч` : ''} {minutes}мин
      </p>
    </article>
  )
}

export default MovieCard;
