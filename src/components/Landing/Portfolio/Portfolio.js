import React from "react"

function Portfolio() {
  return (
    <>
      <h3 className='portfolio__title'>Портфолио</h3>
      <div className='portfolio__container'>
        <a className='portfolio__link' href="#">Статичный сайт</a>
      </div>
      <div className='portfolio__container portfolio__container_type_outline'>
        <a className='portfolio__link' href="#">Адаптивный сайт</a>
      </div>
      <div className='portfolio__container'>
        <a className='portfolio__link' href="#">Одностраничное приложение</a>
      </div>
    </>
  )
}

export default Portfolio;