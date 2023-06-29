import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className='footer__separation-line'></div>
      <div className="footer__container">
        <p className="footer__date">&copy;2023</p>
        <div className="footer__link-container">
          <a className="footer__link" href="">Яндекс.Практикум</a>
          <a className="footer__link" href="">Github</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;