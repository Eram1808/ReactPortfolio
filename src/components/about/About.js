import React from 'react'
import './about.css'
import aboutImg from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FaUsers } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'

function about() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={aboutImg} alt='#' />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about_icon' />
              <h5>Experience</h5>
              <small>2+ years of Experience</small>
            </article>
            <article className='about__card'>
              <FaUsers className='about_icon' />
              <h5>Clients</h5>
              <small>200+ worldwide</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about_icon' />
              <h5>Clients</h5>
              <small>20+ completed</small>
            </article>
          </div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Molestias aut, repellat ipsum facere voluptate dicta obcaecati
            deserunt nobis suscipit eaque?
          </p>
          <a href='#contact' className='btn btn-primary'> Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about