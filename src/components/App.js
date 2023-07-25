import './App.css';
import { React, useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { MoviesContext } from '../contexts/moviesContext'
import Landing from './Landing/Landing';
import Movies from './Movies/Movies';
import SavedMovies from './SavedMovies/SavedMovies';
import Profile from './Profile/Profile';
import Menu from './Menu/Menu';
import ProfileChange from './ProfileChange/ProfileChange';
import Register from './Register/Register';
import Login from './Login/Login';
import PageNotFound from './PageNotFound/PageNotFound';
import moviesApi from '../utils/MoviesApi';
import ProtectedRoute from '../utils/ProtectedRoute';

function App() {
  // меню
  const [menuOpen, setMenuOpen] = useState(false)
  // фильмы
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [movieAttentionSpan, setMovieAttentionSpan] = useState('')
  // аутентификация
  const [loggedIn, setLoggedIn] = useState(false)

  const attentionMovie = {
    error: 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз',
    notFound: 'Ничего не найдено'
  }

  function handleMenuClick() {
    setMenuOpen(!menuOpen)
  }

  function getMovies(valueOfInput, shortFilm) {
    const moviesFromSearch = []
    setIsLoading(true)

    moviesApi.getFilms()
      .then((movies) => {
        movies.forEach((item) => {
          if (
            item.nameRU.toLowerCase()
              .indexOf(valueOfInput.toLowerCase()) === -1) {
            return
          }
          if (shortFilm && item.duration >= 40) {
            return
          }
          moviesFromSearch.push(item)
        })
        return moviesFromSearch
      })
      .then((filteredMovies) => {
        setMovies(filteredMovies)
        const dataToSave = { filteredMovies, valueOfInput, shortFilm }
        localStorage.setItem('movieData', JSON.stringify(dataToSave))
        setMovieAttentionSpan(attentionMovie.notFound)
      })
      .catch(() => {
        setMovieAttentionSpan(attentionMovie.error)
      })
      .finally(() => setIsLoading(false))
  }

  useEffect(() => {
    const savedData = localStorage.getItem('movieData')
    if (savedData) {
      const { filteredMovies } = JSON.parse(savedData)
      setMovies(filteredMovies)
    }
  }, [])

  return (
    <>
      <MoviesContext.Provider value={movies}>
        <Routes>
          <Route
            path="/"
            element={<Landing />} />
          <Route
            path="/movies"
            element={
              <ProtectedRoute
                element={Movies}
                handleMenuClick={handleMenuClick}
                onGetMovies={getMovies}
                isLoading={isLoading}
                isMovieAttentionSpan={movieAttentionSpan}
                loggedIn={loggedIn} />} />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute
                element={SavedMovies}
                handleMenuClick={handleMenuClick}
                loggedIn={loggedIn} />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute
                element={Profile}
                handleMenuClick={handleMenuClick}
                loggedIn={loggedIn} />} />
          <Route
            path="/profile-change"
            element={<ProtectedRoute
              element={ProfileChange}
              handleMenuClick={handleMenuClick}
              loggedIn={loggedIn} />} />
          <Route
            path="/signup"
            element={<Register />} />
          <Route
            path="/signin"
            element={<Login />} />
          <Route
            path="*"
            element={<PageNotFound />} />
        </Routes>

        <Menu
          isOpened={menuOpen}
          handleMenuClick={handleMenuClick} />
      </MoviesContext.Provider>
    </>
  );
}

export default App;