import React from "react"

function Portfolio() {
  return (
    <>
      <h3 className='portfolio__title'>Портфолио</h3>
      <div className='portfolio__container'>
        <a
          href="https://github.com/PaulAsaf2/how-to-learn"
          target="blank"
          className='portfolio__link'>
          Статичный сайт
        </a>
      </div>
      <div className='portfolio__container portfolio__container_type_outline'>
        <a
          href="https://github.com/PaulAsaf2/russian-travel"
          target="blank"
          className='portfolio__link'>
          Адаптивный сайт
        </a>
      </div>
      <div className='portfolio__container'>
        <a
          href="https://github.com/PaulAsaf2/mesto"
          target="blank"
          className='portfolio__link'>
          Одностраничное приложение
        </a>
      </div>
    </>
  )
}

export default Portfolio;