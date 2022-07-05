import React from 'react'
import './portfolio.css'
import img1 from '../../assets/portfolio1.jpg'
import img2 from '../../assets/portfolio2.jpg'
import img3 from '../../assets/portfolio3.jpg'
import img4 from '../../assets/portfolio4.jpg'
import img5 from '../../assets/portfolio5.png'
import img6 from '../../assets/portfolio6.jpg'

function Portfolio() {
  const portImg = [
    {
      image: img1,
      title: "portfolio title here",
      btn: 'Github',
      btnPrimary: 'Live Demo',
      github: 'https://github.com',
      demo: 'https://example.com'

    },
    {
      image: img2,
      title: "portfolio title here",
      btn: 'Github',
      btnPrimary: 'Live Demo',
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      image: img3,
      title: "portfolio title here",
      btn: 'Github',
      btnPrimary: 'Live Demo',
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      image: img4,
      title: "portfolio title here",
      btn: 'Github',
      btnPrimary: 'Live Demo',
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      image: img5,
      title: "portfolio title here",
      btn: 'Github',
      btnPrimary: 'Live Demo',
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      image: img6,
      title: "portfolio title here",
      btn: 'Github',
      btnPrimary: 'Live Demo',
      github: 'https://github.com',
      demo: 'https://example.com'
    },
  ]
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        {portImg.map((portitem, key) => {
          return <article className='portfolio__item' key={key}>
            <div className='portfolio__item-image'><img alt='#' src={portitem.image} /></div>
            <h3>{portitem.title}</h3>
            <div className='portfolio__item-cta'>
            <a href={portitem.github} className='btn' target='_blank'>{portitem.btn}</a>
            <a href={portitem.demo} className='btn btn-primary' target='_blank'>{portitem.btnPrimary}</a>
            </div>
          </article>
        })}
    </div>
    </section >
  )
}

export default Portfolio