/* eslint-disable react-hooks/exhaustive-deps */
import './App.css';
import { React, useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useMatch } from 'react-router-dom';
import { CurrentUser, MoviesContext, SavedMoviesContext } from '../contexts/context'
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
import * as auth from '../utils/authorization'
import { mainApi } from '../utils/MainApi';
import * as constant from '../utils/constants'
// import { attentionMovie, attentionUser } from '../utils/constants'

function App() {
  // меню
  const [menuOpen, setMenuOpen] = useState(false)
  // фильмы
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [movieAttentionSpan, setMovieAttentionSpan] = useState('')
  // сохранённые фильмы
  const [savedMovies, setSavedMovies] = useState([])
  // пользователь
  const [loggedIn, setLoggedIn] = useState(false)
  const [tokenCheck, setTokenCheck] = useState(false)
  const [registerAttention, setRegisterAttention] = useState('')
  const [loginAttention, setLoginAttention] = useState('')
  const [profileChangeAttention, setProfileChangeAttention] = useState('')
  const [editProfileChangeAttention, setEditProfileChangeAttention] = useState('')
  const [currentUser, setCurrentUser] = useState({});

  const navigate = useNavigate()
  const savedMoviesPath = useMatch('/saved-movies')

  function handleMenuClick() {
    setMenuOpen(!menuOpen)
  }

  // пользователь ----- пользователь ----- пользователь ----- пользователь

  // автоматический вход
  useEffect(() => {
    const logged = localStorage.getItem('loginStatus');
    if (logged) {
      setLoggedIn(true);
      setTokenCheck(true);
      getMainData();
      setRegisterAttention('')
      setLoginAttention('')
      setProfileChangeAttention('')
    } else {
      setLoggedIn(false);
      setTokenCheck(true);
    }
  }, [])

  // регистрация
  function handleRegister(name, email, password) {
    auth.register(name, email, password)
      .then(() => { handleLogin(email, password) })
      .catch((err) => {
        if (err === constant.conflictError) {
          setRegisterAttention(constant.attentionUser.email)
        } else {
          setRegisterAttention(constant.attentionUser.error)
        }
        console.log(err);
      })
  }

  // вход
  function handleLogin(email, password) {
    auth.authorize(email, password)
      .then((data) => {
        if (data.logged) {
          getMainData()
          setLoggedIn(true);
          navigate('/movies', { replace: true });
        } else { setLoggedIn(false); }
      })
      .catch((err) => {
        if (err === constant.unauthorizedError) {
          setLoginAttention(constant.attentionUser.login)
        } else {
          setLoginAttention(constant.attentionUser.error)
        }
        console.log(err);
      })
  }

  // редактирование профиля
  function handleUpdateUser(userData) {
    mainApi.setProfileData(userData)
      .then((newUserData) => {
        setCurrentUser(newUserData)
        navigate('/profile', { replace: true })
        setProfileChangeAttention(constant.attentionUser.profile)
        setTimeout(() => { setProfileChangeAttention('') }, 4000)
      })
      .catch((err) => {
        setEditProfileChangeAttention(constant.attentionUser.profileError)
        console.log(err)
      })
  }

  // выход из уч. записи
  function signOut() {
    localStorage.removeItem('movieData');
    localStorage.removeItem('loginStatus');
    setLoggedIn(false);
    setMovies([])
    navigate('/', { replace: true });
  }

  // ------ ------ ------ ------ ------ ------ ------ ------

  // получение данных пользователя и сохранённых фильмов
  function getMainData() {
    Promise.all([mainApi.getProfileData(), mainApi.getSavedMovies()])
      .then(([userData, savedMovies]) => {
        setCurrentUser(userData)
        setSavedMovies(savedMovies)
      })
      .catch((err) => console.log(err));
  }

  // фильмы ----- фильмы ----- фильмы ----- фильмы ----- фильмы

  // фильтрует фильмы
  function filterMovies(movieArray, valueOfInput, shortFilm) {
    const moviesFromSearch = []

    movieArray.forEach((item) => {
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
  }

  // поиск фильмов
  function getMovies(valueOfInput, shortFilm) {
    setIsLoading(true)

    moviesApi.getFilms()
      .then((movies) => {
        return filterMovies(movies, valueOfInput, shortFilm)
      })
      .then((filteredMovies) => {
        setMovies(filteredMovies)
        const dataToSave = { filteredMovies, valueOfInput, shortFilm }
        localStorage.setItem('movieData', JSON.stringify(dataToSave))
        setMovieAttentionSpan(constant.attentionMovie.notFound)
      })
      .catch(() => {
        setMovieAttentionSpan(constant.attentionMovie.error)
      })
      .finally(() => setIsLoading(false))
  }

  // сохранение истории поиска
  useEffect(() => {
    const savedData = localStorage.getItem('movieData')
    if (savedData) {
      const { filteredMovies } = JSON.parse(savedData)
      setMovies(filteredMovies)
    }
  }, [])

  // обработка лайка
  function handleLike(movie, imageLink) {
    const checkMovies = savedMovies.find((item) => {
      return item.id === movie.id
    })

    if (checkMovies) {
      handleDeleteMovie(checkMovies._id)
      return
    }

    const newMovie = {
      ...movie,
      image: imageLink
    }
    delete newMovie.created_at
    delete newMovie.updated_at

    mainApi.createMovie(newMovie)
      .then(() => { getSavedMovies() })
      .catch((err) => console.log(err))
  }
  
  // сохранённые фильмы ----- сохранённые фильмы ----- сохранённые фильмы
  
  // получить сохранённые фильмы
  function getSavedMovies() {
    mainApi.getSavedMovies()
    .then((savedMovies) => { setSavedMovies(savedMovies) })
    .catch((err) => console.log(err))
  }

  // поиск сохранённых фильмов
  function searchSavedMovies(valueOfInput, shortFilm) {
    setIsLoading(true)

    mainApi.getSavedMovies()
    .then((savedMovies) => {
      return filterMovies(savedMovies, valueOfInput, shortFilm)
      })
      .then((filteredMovies) => {
        setSavedMovies(filteredMovies)
        setMovieAttentionSpan(constant.attentionMovie.notFound)
      })
      .catch(() => {
        setMovieAttentionSpan(constant.attentionMovie.error)
      })
      .finally(() => setIsLoading(false))
    }
    
    // обнуление результатов поиска сохранённых фильмов
    useEffect(() => { getSavedMovies() }, [savedMoviesPath])

    // удаление сохранённого фильма
    function handleDeleteMovie(id) {
      mainApi.deleteMovie(id)
      .then(() => { getSavedMovies() })
      .catch((err) => console.log(err))
    }
    
  return (
    <> {
      tokenCheck && (
        <MoviesContext.Provider value={movies}>
          <SavedMoviesContext.Provider value={savedMovies}>
            <CurrentUser.Provider value={currentUser}>
              <Routes>
                <Route
                  path="/movies"
                  element={
                    <ProtectedRoute
                      element={Movies}
                      handleMenuClick={handleMenuClick}
                      onGetMovies={getMovies}
                      isLoading={isLoading}
                      isMovieAttentionSpan={movieAttentionSpan}
                      setMovieAttentionSpan={setMovieAttentionSpan}
                      loggedIn={loggedIn}
                      onLike={handleLike} />} />
                <Route
                  path="/saved-movies"
                  element={
                    <ProtectedRoute
                      element={SavedMovies}
                      handleMenuClick={handleMenuClick}
                      onGetSavedMovies={searchSavedMovies}
                      isMovieAttentionSpan={movieAttentionSpan}
                      setMovieAttentionSpan={setMovieAttentionSpan}
                      loggedIn={loggedIn}
                      onDelete={handleDeleteMovie} />} />
                <Route
                  path="/profile"
                  element={
                    <ProtectedRoute
                      element={Profile}
                      handleMenuClick={handleMenuClick}
                      loggedIn={loggedIn}
                      attentionMessage={profileChangeAttention}
                      onSignout={signOut} />} />
                <Route
                  path="/profile-change"
                  element={
                    <ProtectedRoute
                      element={ProfileChange}
                      handleMenuClick={handleMenuClick}
                      loggedIn={loggedIn}
                      attentionMessage={editProfileChangeAttention}
                      onUpdateUser={handleUpdateUser} />} />
                <Route
                  path="/"
                  element={
                    <Landing
                      handleMenuClick={handleMenuClick}
                      loggedIn={loggedIn} />} />
                <Route
                  path="/signup"
                  element={
                    <Register
                      onRegister={handleRegister}
                      attentionMessage={registerAttention}
                      loggedIn={loggedIn} />} />
                <Route
                  path="/signin"
                  element={
                    <Login
                      onLogin={handleLogin}
                      attentionMessage={loginAttention}
                      loggedIn={loggedIn} />} />
                <Route
                  path="*"
                  element={<PageNotFound />} />
              </Routes>
              <Menu
                isOpened={menuOpen}
                handleMenuClick={handleMenuClick} />
            </CurrentUser.Provider>
          </SavedMoviesContext.Provider>
        </MoviesContext.Provider>
      )
    }
    </>
  );
}

export default App;