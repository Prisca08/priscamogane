import React from 'react'
import './about.css'

const about = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
 
        <div className="about__content">
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