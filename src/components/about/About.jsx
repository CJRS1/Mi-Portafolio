import React from 'react'
import './about.css'
import YO from '../../assets/Foto.JPG'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (

    <section id='about'>
    <h2> Sobre mi</h2>

    <div className='container about__container'>
      <div className="about__me">
        <div className="about__me-image">
          <img src={YO} alt="yo" />
        </div>
      </div>
    

    <div className="about__content">
      <div className="about__cards">
        
        <article className="about__card">
          <FaAward className='about__icon'/>
          <h5>Experiencia</h5>
          <small>3 meses trabajando</small>
        </article>

        <article className="about__card">
          <VscFolderLibrary className='about__icon'/>
          <h5>Proyectos</h5>
          <small>5 proyectos</small>
        </article>
    </div>
    <div className='about_contact'>
    <p>
      Ingeniero Mecatrónico interesado en el área de Desarrollo Web(Frontend y Backend), con 3 meses de experiencia y con 5 proyectos culminados.
      
    </p>
    <a href="#contact" className='btn btn-primary'>Escríbeme</a>
    </div>
    
    </div>
    
    </div>
    </section>
  )
}

export default About