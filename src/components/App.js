import './App.css';
import { React, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [movies, setMovies] = useState([])


  function handleMenuClick() {
    setMenuOpen(!menuOpen)
  }

  function getMovies(valueOfInput, shortFilm) {
    const moviesFromSearch = []

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
      })
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
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<Landing />} />
            <Route
              path="/movies"
              element={
                <Movies
                  handleMenuClick={handleMenuClick}
                  onGetMovies={getMovies}
                />
              } />
            <Route
              path="/saved-movies"
              element={<SavedMovies handleMenuClick={handleMenuClick} />} />
            <Route
              path="/profile"
              element={<Profile handleMenuClick={handleMenuClick} />} />
            <Route
              path="/profile-change"
              element={<ProfileChange handleMenuClick={handleMenuClick} />} />
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
            handleMenuClick={handleMenuClick}
          />

        </BrowserRouter>
      </MoviesContext.Provider>
    </>
  );
}

export default App;