import React from 'react'
import './header.css'
import CTA from './CTA'
import yo from '../../assets/Foto.JPG'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hola soy</h5>
        <h1>Christian Reyes</h1>
        <h5 className="text-light">
          Desarrollador Fullstack
        </h5>
        <CTA/>
        <HeaderSocials/>

        <div className="yo">
          <img src={yo} alt="yo" />
        </div>

        <a href="#contact" className='scroll__down'>Ir al final</a>
      </div>
    </header>
  )
}

export default Header