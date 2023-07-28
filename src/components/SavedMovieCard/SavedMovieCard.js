import { React, useState } from "react";

function SavedMovieCard({ image, nameRU, description, duration, trailerLink }) {
  const [isLiked, setIsLiked] = useState(false)
  const likeStyle = `movie__like ${isLiked && 'movie__liked'}`

  const hours = Math.floor(duration / 60)
  const minutes = duration % 60

  return (
    <article className="movie">
      <a href={trailerLink} target="blank">
        <img
          className="movie__image"
          src={image}
          alt={description} />
      </a>
      <div className="movie__container">
        <h2 className="movie__title">{nameRU}</h2>
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

export default SavedMovieCard;
