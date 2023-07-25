/* eslint-disable react-hooks/exhaustive-deps */
import './App.css';
import { React, useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { CurrentUser, MoviesContext } from '../contexts/moviesContext'
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
  // аутентификация
  const [loggedIn, setLoggedIn] = useState(false)
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
    const logged = localStorage.getItem('LoginStatus');
    if (logged) {
      getMainData();
      setLoggedIn(true);
      navigate('/movies', { replace: true })
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
    localStorage.removeItem('LoginStatus');
    localStorage.removeItem('movieData');
    setLoggedIn(false);
    setMovies([])
    navigate('/', { replace: true });
  }

  // получение данных пользователя
  function getMainData() {
    mainApi.getProfileData()
      .then((data) => {
        setCurrentUser(data)
      })
      .catch((err) => console.log(err));
  }

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

  return (
    <>
      <MoviesContext.Provider value={movies}>
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
      </MoviesContext.Provider>
    </>
  );
}

export default App;