import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

function experience() {
  const expItems = [
    {
      subHeading: 'HTML',
      small: 'Experience',
    },
    {
      subHeading: 'Css',
      small: 'Experience',
    },
    {
      subHeading: 'HTML',
      small: 'Experience',
    },
    {
      subHeading: 'Css',
      small: 'Experience',
    }, {
      subHeading: 'HTML',
      small: 'Experience',
    },
    {
      subHeading: 'Css',
      small: 'Experience',
    }
  ]
  const expItemsBack = [
    {
      subHeading: 'Mysql',
      small: 'Experience',
    },
    {
      subHeading: 'Drupal',
      small: 'Experience',
    },
    {
      subHeading: 'Mysql',
      small: 'Experience',
    },
    {
      subHeading: 'Drupal',
      small: 'Experience',
    },
    {
      subHeading: 'Mysql',
      small: 'Experience',
    },
    {
      subHeading: 'Drupal',
      small: 'Experience',
    }
  ]
  return (
    <section id='experience'>
      <h5>What's Skill I Have</h5>
      <h2>My Experience</h2>
      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            {expItems.map((item, key) => {
              return <article key={key} className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>{item.subHeading}</h4>
                  <small className='text-light'>{item.small}</small>
                </div>
              </article>
            })}
        </div>
      </div>
      <div className='experience__backend'>
        <h3>Backend Development</h3>
        <div className='experience__content'>
        {expItemsBack.map((item, key) => {
              return <article key={key} className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>{item.subHeading}</h4>
                  <small className='text-light'>{item.small}</small>
                </div>
              </article>
            })}
        </div>
      </div>
    </div>
    </section >
  )
}

export default experience