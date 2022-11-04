import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {IoLogoTwitter} from 'react-icons/io'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/khomotso-prisca-mogane-42607bb1/" target="blank"><BsLinkedin/></a>
        <a href="https://github.com/Prisca08" target="blank"><FaGithub/></a>
        <a href="https://twitter.com/Prisca2425" target="blank"><IoLogoTwitter /></a>
    </div>
  )
}

export default HeaderSocials
