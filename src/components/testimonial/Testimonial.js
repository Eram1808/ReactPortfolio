import React from 'react'
import './testimonial.css'
import Avtr1 from '../../assets/avatar1.jpg'
import Avtr2 from '../../assets/avatar2.jpg'
import Avtr3 from '../../assets/avatar3.jpg'
import Avtr4 from '../../assets/avatar4.jpg'
import {Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function testimonial() {
  const testList = [
    {
      image: Avtr1,
      client: 'Ernest Achiever',
      review: 'We can also use high-order components to loadWe can also use high-order components to loadWe can also use high-order components to loadWe can also use high-order components to load'
    },
    {
      image: Avtr2,
      client: 'Ernest Achiever',
      review: 'We can also use high-order components to loadWe can also use high-order components to loadWe can also use high-order components to loadWe can also use high-order components to load'
    },
    {
      image: Avtr3,
      client: 'Ernest Achiever',
      review: 'We can also use high-order components to loadWe can also use high-order components to loadWe can also use high-order components to loadWe can also use high-order components to load'
    },
    {
      image: Avtr4,
      client: 'Ernest Achiever',
      review: 'We can also use high-order components to loadWe can also use high-order components to loadWe can also use high-order components to loadWe can also use high-order components to load'
    }
  ]
  return (
    <section id='testimonial'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>
      <Swiper
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
       className='container testimonial__container'>
        {testList.map((testItem, key) => {
          return <SwiperSlide className='testimonial'>
          <div className='client__avatar'>
            <img alt='#' src={testItem.image} />
          </div>
          
          <h5 className='client__name'>{testItem.client}</h5>
            <small className='client__review'>{testItem.review}</small>
          </SwiperSlide>
        })}
        </Swiper>
    </section>
  )
}

export default testimonial