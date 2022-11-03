import React from 'react'
import './about.css'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import ME from '../../assets/me.jpg'

const about = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        {/*<div className="about__me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
  </div>*/}
 
        <div className="about__content">
          {/*<div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>4+ Years</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>20+ Clients</small>
            </article>

            {/*<article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>33+ Completed</small>
            </article>
          </div>*/}
          <p>
          I am a fullstack developer with an interest in software development, web development, and software testing. 
          I have 4+ years of industry software development experience designing and developing user-centered applications from initial concept to final, polished 
          deliverable using languages and tools including C#, PHP, Python, ASP.Net MVC, .Net Core, Angular, Typescript, React, Javascript, NodeJs, SQL, MySQL, AWS, JavaScript, HTML, CSS, Git.
          </p>
          <p>
          In addition, I have hands on experience with Visual Studio, Python 3, NodeJS, Angular, React.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
      </section>
  )
}

export default about