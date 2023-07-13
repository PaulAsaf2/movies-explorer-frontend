import React from "react"

function Portfolio() {
  return (
    <div className="portfolio">
      <h3 className='portfolio__title'>Портфолио</h3>
      <a
        href="https://github.com/PaulAsaf2/how-to-learn"
        target="blank"
        className='portfolio__link'>
        <div className='portfolio__container'>
          Статичный сайт
        </div>
      </a>
      <a
        href="https://github.com/PaulAsaf2/russian-travel"
        target="blank"
        className='portfolio__link'>
        <div className='portfolio__container portfolio__container_type_outline'>
          Адаптивный сайт
        </div>
      </a>
      <a
        href="https://github.com/PaulAsaf2/mesto"
        target="blank"
        className='portfolio__link'>
        <div className='portfolio__container'>
          Одностраничное приложение
        </div>
      </a>
    </div>
  )
}

export default Portfolio;