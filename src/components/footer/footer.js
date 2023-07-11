import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className='footer__separation-line'></div>
      <div className="footer__container">
        <p className="footer__date">&copy;2023</p>
        <div className="footer__link-container">
          <a
            href="https://practicum.yandex.ru/"
            target="blank"
            className="footer__link">
            Яндекс.Практикум
          </a>
          <a
            href="https://github.com/PaulAsaf2"
            target="blank"
            className="footer__link">
            Github
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;