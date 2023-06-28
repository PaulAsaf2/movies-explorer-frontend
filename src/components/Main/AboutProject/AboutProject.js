import React from 'react';

function AboutProject() {
  return (
    <section className='aboutProject'>
      <h2 className='aboutProject__title'>О проекте</h2>
      <div className='separation-line'></div>
      <div className='aboutProject__container'>
        <h3 className='aboutProject__subtitle'>Дипломный проект включал 5 этапов</h3>
        <h3 className='aboutProject__subtitle'>На выполнение диплома ушло 5 недель</h3>
        <p className='aboutProject__paragraph'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        <p className='aboutProject__paragraph'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
      </div>

      <div className='project-time__container'>
        <div className='project-time__title'>1 неделя</div>
        <div className='project-time__title'>4 недели</div>
        <p className='project-time__description'>Back-end</p>
        <p className='project-time__description'>Front-end</p>
      </div>
    </section>
  )
}

export default AboutProject;