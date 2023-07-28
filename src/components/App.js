/* eslint-disable react-hooks/exhaustive-deps */
import './App.css';
import { React, useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { CurrentUser, MoviesContext, SavedMoviesContext } from '../contexts/moviesContext'
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

function App() {
  // меню
  const [menuOpen, setMenuOpen] = useState(false)
  // фильмы
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [movieAttentionSpan, setMovieAttentionSpan] = useState('')
  // сохранённые фильмы
  const [savedMovies, setSavedMovies] = useState([])
  // аутентификация
  const [loggedIn, setLoggedIn] = useState(false)
  const [tokenCheck, setTokenCheck] = useState(false)
  const [attention, setAttention] = useState('')
  const [enter, setEnter] = useState(false)
  const [currentUser, setCurrentUser] = useState({});

  const attentionMessage = {
    email: 'Пользователь с таким e-mail уже существует',
    error: 'Что-то пошло не так! Попробуйте еще раз.',
    login: 'Неправильный логин или пароль',
    profile: 'Данные успешно обновлены'
  }

  const navigate = useNavigate()
  const attentionMovie = {
    error: 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз',
    notFound: 'Ничего не найдено'
  }

  function handleMenuClick() {
    setMenuOpen(!menuOpen)
  }

  // автоматический вход
  useEffect(() => {
    const logged = localStorage.getItem('loginStatus');
    if (logged) {
      setLoggedIn(true);
      setTokenCheck(true);
      getMainData();
    } else {
      setTokenCheck(true);
      setLoggedIn(false);
    }
  }, [])

  // регистрация
  function handleRegister(name, email, password) {
    auth.register(name, email, password)
      .then(() => {
        setLoggedIn(true)
        navigate('/movies', { replace: true })
      })
      .catch((err) => {
        if (err === 'Ошибка: 409') {
          setAttention(attentionMessage.email)
        } else {
          setAttention(attentionMessage.error)
        }
        setEnter(true)
        setTimeout(() => { setEnter(false) }, 5000)
        console.log(err);
      })
  }

  // логинизация
  function handleLogin(email, password) {
    auth.authorize(email, password)
      .then((data) => {
        if (data.logged) {
          getMainData()
          setLoggedIn(true)
          navigate('/movies', { replace: true })
        }
      })
      .catch((err) => {
        if (err === 'Ошибка: 401') {
          setAttention(attentionMessage.login)
        } else {
          setAttention(attentionMessage.error)
        }
        setEnter(true)
        setTimeout(() => { setEnter(false) }, 5000)
        console.log(err);
      })
  }

  // редактирование профиля
  function handleUpdateUser(userData) {
    mainApi.setProfileData(userData)
      .then((newUserData) => {
        setCurrentUser(newUserData)
        navigate('/profile', { replace: true })
        setAttention(attentionMessage.profile)
        setEnter(true)
        setTimeout(() => { setEnter(false) }, 2000)
      })
      .catch((err) => console.log(err))
  }

  // выход из уч. записи
  function signOut() {
    localStorage.removeItem('loginStatus');
    localStorage.removeItem('movieData');
    setLoggedIn(false);
    setMovies([])
    navigate('/', { replace: true });
  }

  // получение данных пользователя
  function getMainData() {
    Promise.all([mainApi.getProfileData(), mainApi.getSavedMovies()])
      .then(([userData, savedMovies]) => {
        setCurrentUser(userData)
        setSavedMovies(savedMovies)
      })
      .catch((err) => console.log(err));
  }

  // фильмы ----- фильмы ----- фильмы ----- фильмы ----- фильмы

  // получить фильмы
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
      .then(() => {
        mainApi.getSavedMovies()
          .then((savedMovies) => {
            console.log(savedMovies);
            setSavedMovies(savedMovies)
          })
      })
  }

  // удаление фильма
  function handleDeleteMovie(id) {
    // console.log(id);
    mainApi.deleteMovie(id)
      .then(() => {
        mainApi.getSavedMovies()
          .then((savedMovies) => {
            console.log(savedMovies);
            setSavedMovies(savedMovies)
          })
          .catch((err) => {
            if (err === 'Ошибка: 404') {
              setSavedMovies([])
            }
            console.log(err);
          })
      })
  }

  return (
    <> {
      tokenCheck && (
        <MoviesContext.Provider value={movies}>
          <SavedMoviesContext.Provider value={savedMovies}>
            <CurrentUser.Provider value={currentUser}>
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
                      setMovieAttentionSpan={setMovieAttentionSpan}
                      loggedIn={loggedIn}
                      onLike={handleLike} />} />
                <Route
                  path="/saved-movies"
                  element={
                    <ProtectedRoute
                      element={SavedMovies}
                      handleMenuClick={handleMenuClick}
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
                      enter={enter}
                      attentionMessage={attention}
                      onSignout={signOut} />} />
                <Route
                  path="/profile-change"
                  element={
                    <ProtectedRoute
                      element={ProfileChange}
                      handleMenuClick={handleMenuClick}
                      loggedIn={loggedIn}
                      onUpdateUser={handleUpdateUser} />} />
                <Route
                  path="/signup"
                  element={
                    <Register
                      onRegister={handleRegister}
                      attentionMessage={attention}
                      enter={enter} />} />
                <Route
                  path="/signin"
                  element={
                    <Login
                      onLogin={handleLogin}
                      attentionMessage={attention}
                      enter={enter} />} />
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