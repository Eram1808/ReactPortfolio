import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import './contact.css'
import mailicon from '../../assets/mail.png'
import mailicon2 from '../../assets/fb.png'
import mailicon3 from '../../assets/wt.png'

function Contact() {
  const contList = [
    {
      icon: mailicon,
      hsmall: 'Email',
      hbigg: 'eram.fatima.sg1@gmail.com',
      amail: 'mailto:eram.fatima.sg1@gmail.com',
      ahead: ' Send A Message'
    },
    {
      icon: mailicon2,
      hsmall: 'Messenger',
      hbigg: 'dummy text',
      amail: 'https://example.com',
      ahead: ' Send A Message'
    },
    {
      icon: mailicon3,
      hsmall: 'WhatsApp',
      hbigg: '98988*****',
      amail: 'tel:989844****',
      ahead: ' Send A Message'
    }
  ]

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_21k8hiw', 'template_zhfnev9', form.current, '_aBLCkxDl5yK-Nyyi')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          {contList.map((contItem, key) => {
            return <article key={key} className='contact__option'>
              <img src={contItem.icon} alt="mail" className='mail-icon' />
              <h4>{contItem.hsmall}</h4>
              <h5>{contItem.hbigg}</h5>
              <a href={contItem.amail} target="_blank">{contItem.ahead}</a>
            </article>
          })}
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='mail' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message'></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact