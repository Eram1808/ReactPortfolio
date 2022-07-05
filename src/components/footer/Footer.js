import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

function Footer() {
  const footList = [
    {
      link: "#",
      title: "Home"
    },
    {
      link: "#about",
      title: "About"
    },
    {
      link: "#experience",
      title: "Experience"
    },
    {
      link: "#service",
      title: "Service"
    },
    {
      link: "#portfolio",
      title: "Portfolio"
    },
    {
      link: "#testimonial",
      title: "Testimonial"
    },
    {
      link: "#contact",
      title: "Contact"
    },
  ]
  return (
    <footer>
      <a href='#' className='footer__logo'>ReactJs Portfolio Created By Eram Fatima</a>
      <ul className='permalinks'>
        {footList.map((footItem, key)=> {
          return <li key={key}><a href={footItem.link} >{footItem.title}</a></li>
        })}
      </ul>
      <div className='footer__socials'>
        <a href='#' ><FaFacebookF /></a>
        <a href='#' ><FiInstagram /></a>
        <a href='#' ><IoLogoTwitter /></a>
      </div>
      <div className='footer__copyright'>
        <small> &#169; Created By Eram Fatima</small>
      </div>
    </footer>
  )
}

export default Footer