import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/me.jpg'

const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
         <article className='portfolio__item'>
          <div className="portfolio_item-image">
            <img src={IMG1} alt="IMG1" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" className='btn'>GitHub</a>
          <a href="https://dribble.com" className='btn btn-primary'>Live Demo</a>
          </div>
         </article>
         <article className='portfolio__item'>
          <div className="portfolio_item-image">
            <img src={IMG1} alt="IMG1" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" className='btn'>GitHub</a>
          <a href="https://dribble.com" className='btn btn-primary'>Live Demo</a>
          </div>
         </article>
         <article className='portfolio__item'>
          <div className="portfolio_item-image">
            <img src={IMG1} alt="IMG1" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" className='btn'>GitHub</a>
          <a href="https://dribble.com" className='btn btn-primary'>Live Demo</a>
          </div>
         </article>
         <article className='portfolio__item'>
          <div className="portfolio_item-image">
            <img src={IMG1} alt="IMG1" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" className='btn'>GitHub</a>
          <a href="https://dribble.com" className='btn btn-primary'>Live Demo</a>
          </div>
         </article>
         <article className='portfolio__item'>
          <div className="portfolio_item-image">
            <img src={IMG1} alt="IMG1" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" className='btn'>GitHub</a>
          <a href="https://dribble.com" className='btn btn-primary'>Live Demo</a>
          </div>
         </article>
         <article className='portfolio__item'>
          <div className="portfolio_item-image">
            <img src="" alt="IMG1" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" className='btn'>GitHub</a>
          <a href="https://dribble.com" className='btn btn-primary'>Live Demo</a>
          </div>
         </article>
         
         
      </div>
    </section>
  )
}

export default portfolio