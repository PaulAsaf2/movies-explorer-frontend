import { React, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Landing from './Landing/Landing';
import Movies from './Movies/Movies';
import SavedMovies from './SavedMovies/SavedMovies';
import Profile from './Profile/Profile';
import Menu from './Menu/Menu';
import ProfileChange from './ProfileChange/ProfileChange';
import Register from './Register/Register';
import Login from './Login/Login';
import PageNotFound from './PageNotFound/PageNotFound';

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  function handleMenuClick() {
    setMenuOpen(!menuOpen)
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/movies" element={<Movies handleMenuClick={handleMenuClick} />} />
          <Route path="/saved-movies" element={<SavedMovies handleMenuClick={handleMenuClick} />} />
          <Route path="/profile" element={<Profile handleMenuClick={handleMenuClick} />} />
          <Route path="/profile-change" element={<ProfileChange handleMenuClick={handleMenuClick} />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/signin" element={<Login/>} />
          <Route path="*" element={<PageNotFound/>} />
        </Routes>

        <Menu
          isOpened={menuOpen}
          handleMenuClick={handleMenuClick}
        />

      </BrowserRouter>
    </>
  );
}

export default App;