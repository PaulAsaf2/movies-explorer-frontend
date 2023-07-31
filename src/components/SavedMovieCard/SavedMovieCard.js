import { React } from "react";

function SavedMovieCard({ movie, onDelete }) {
  const hours = Math.floor(movie.duration / 60)
  const minutes = movie.duration % 60

  return (
    <article className="movie">
      <a href={movie.trailerLink} target="blank">
        <img
          className="movie__image"
          src={movie.image}
          alt={movie.description} />
      </a>
      <div className="movie__container">
        <h2 className="movie__title">{movie.nameRU}</h2>
        <button
          className='movie__delete'
          onClick={() => onDelete(movie._id)}
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
