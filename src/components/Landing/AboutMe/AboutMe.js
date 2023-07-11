import React from 'react';
import Portfolio from '../Portfolio/Portfolio';
import student from '../../../images/pavel.jpg'

function AboutMe() {
  return (
    <section className='about-me'>
      <h2 className='aboutProject__title'>Студент</h2>
      <div className='about-me__separation-line'></div>
      <div className='about-me_container'>
        <div className='grid-item about-me_container-for-text'>
          <h3 className='about-me__title'>Павел</h3>
          <h4 className='about-me__subtitle'>Фронтенд-разработчик, 33 года</h4>
          <p className='about-me__paragraph'>
            Приветствую вас на моём дипломном проекте!<br /> 10 интенсивных месяцев в
            Я.Практикуме прошли незаметно. Хотя в начале казалось, что это будет целая
            вечность. Очень рад, что мой поток ещё застал курс по бэкенду. Я получил
            общее представление о профессии веб-разработчика в целом, с большим
            уклоном во фронтенд. Помимо теории у меня есть достаточный багаж опыта
            что бы создавать самостоятельно приложения от А до Я, может пока не совсем
            сложные. Но это только начало. Впереди меня ждут мириады увлекательных
            проектов и новых открытий.
          </p>
          <a
            href="https://github.com/PaulAsaf2"
            target='blank'
            className='about-me__link'>
            Github
          </a>
        </div>
        <img
          className='grid-item about-me__image'
          src={student}
          alt="Павел Асафов, автор дипломной работы"
        />
      </div>
      <Portfolio />
    </section>
  )
}

export default AboutMe;