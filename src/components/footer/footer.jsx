import React from 'react'
import './footer.css'
import {IoLogoTwitter} from 'react-icons/io'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const footer = () => {
  return (
    <footer>
      
      <a href="/#" className='footer__logo'></a>

      <ul className='permalinks'>
        <li><a href="/#">Home</a></li> -
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>   
      </ul>

      <div className="footer__socials">
        <a href="https://twitter.com/Prisca2425" target="blank"><IoLogoTwitter /></a>
        <a href="https://www.linkedin.com/in/khomotso-prisca-mogane-42607bb1/" target="blank"><BsLinkedin/></a>
        <a href="https://github.com/Prisca08" target="blank"><FaGithub/></a>
      </div>

    </footer>
  ) 
}

export default footer