import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h2>Contáctame</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>reyes.christian@pucp.pe</h5>
            <a href="mailto:reyes.christian@pucp.pe" target="_blank">Envíame un mensaje</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+51 993221518</h5>
            <a href="https://wa.me/+51993221518" target="_blank">Envíame un mensaje</a>
          </article>
        </div>

        <form action="" className='form__message'>
          <input type="text" name="name" id="" placeholder='Escribe tu nombre completo' required/>
          <input type="text" name="email" id="" placeholder='Escribe tu email' required/>
          <textarea name="message" id="" rows="10" placeHolder ='Tu mensaje' required></textarea>
          <button type='submit' className='btn btn-primary'>Enviar mensaje</button>
        </form>
      </div>
    </section>
  )
}

export default Contact