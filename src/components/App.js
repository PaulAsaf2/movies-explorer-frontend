import { React, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Landing from './Landing/Landing';
import Movies from './Movies/Movies';
import SavedMovies from './SavedMovies/SavedMovies';
import Profile from './Profile/Profile';
import Footer from './Footer/Footer';
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

// Роуты

// Подготовьте необходимые маршруты:

// по роуту / отображается страница «О проекте»;
// по роуту /movies отображается страница «Фильмы»;
// по роуту /saved-movies отображается страница «Сохранённые фильмы»;
// по роуту /profile отображается страница с профилем пользователя;
// по роутам /signin и /signup отображаются страницы авторизации и регистрации.

// Защищать маршруты авторизацией пока не требуется. Достаточно наладить работу
// всех ссылок:

// нажатие на логотип ведёт на страницу «О проекте»;
// нажатие на «Фильмы» — на роут /movies;
// нажатие на «Сохранённые фильмы» — на роут /saved-movies;
// нажатие на «Регистрация», «Авторизация», «Аккаунт» — на соответствующие роуты
// /signup, /signin и /profile.