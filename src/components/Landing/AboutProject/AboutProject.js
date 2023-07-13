import React from 'react';

function AboutProject() {
  return (
    <section className='about-project'>
      <h2 className='about-project__title'>О проекте</h2>
      <div className='about-project__separation-line'></div>
      <div className='about-project__container'>
        <h3 className='item about-project__subtitle'>
          Дипломный проект включал 5&nbsp;этапов
        </h3>
        <h3 className='item about-project__subtitle'>
          На выполнение диплома ушло 5&nbsp;недель
        </h3>
        <p className='item about-project__paragraph'>
          Составление плана, работу над бэкендом, вёрстку, добавление функциональности
          и финальные доработки.
        </p>
        <p className='item about-project__paragraph'>
          У каждого этапа был мягкий и жёсткий
          дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
        </p>
      </div>
      <div className='project-time'>
        <div className='project-time__title'>1 неделя</div>
        <div className='project-time__title'>4 недели</div>
        <p className='project-time__description'>Back-end</p>
        <p className='project-time__description'>Front-end</p>
      </div>
    </section>
  )
}

export default AboutProject;