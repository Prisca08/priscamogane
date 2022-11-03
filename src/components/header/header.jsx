import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import ME from '../../assets/me.jpg'
import {FaAward} from 'react-icons/fa'

const header = () => {
  return (
    <header>
    <div className="container header_container">

    <FaAward className='h__icon' />

      <h5>Hello I'm</h5>
      <h1>PRISCA MOGANE</h1>
      <h5 className="text-light"><span className='span__text'>SOFTWARE DEVELOPER</span> | <span className='span__text'>FULL STACK DEVELOPER</span> | <span className='span__text'>.NET CORE DEVELOPER</span></h5>
      <CTA />
      <HeaderSocials />

      <a href="#contact" className='scroll_down'>Scroll Down</a>
</div>
</header>
  )
}

export default header