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
  const [filterText, setFilterText] = useState('')

  function handleMenuClick() {
    setMenuOpen(!menuOpen)
  }

  function getMovies() {
    moviesApi.getFilms()
      .then(movies => setMovies(movies))
  }

  // Проверяйте ширину устройства при монтировании компонента результатов.

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
                  filterText={filterText}
                  onFilterTextChange={setFilterText}
                  onGetMovies={getMovies} />} />
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