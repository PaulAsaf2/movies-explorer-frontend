import { React, useState, useContext, useEffect } from "react"
import { SavedMoviesContext } from '../../contexts/context'

function Like({ movie, onLike, imageLink }) {
  const [isLiked, setIsLiked] = useState(false)
  const savedMovies = useContext(SavedMoviesContext)
  const likeStyle = `movie__like ${isLiked && 'movie__liked'}`

  useEffect(() => {
    const liked = savedMovies.some((savedItem) => {
      return savedItem.id === movie.id
    })
    setIsLiked(liked)
  }, [savedMovies])

  return (
    <button
      className={likeStyle}
      onClick={() => onLike(movie, imageLink)}>
    </button>
  )
}

export default Like