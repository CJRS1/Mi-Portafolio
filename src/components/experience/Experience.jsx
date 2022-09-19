import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h2>Conocimientos</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Nivel: </small>
                <small className='text-light'>Intermedio</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Nivel: </small>
                <small className='text-light'>Intermedio</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>JS</h4>
                <small className='text-light'>Nivel: </small>
                <small className='text-light'>Intermedio</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Nivel: </small>
                <small className='text-light'>Intermedio</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>React JS</h4>
                <small className='text-light'>Nivel: </small>
                <small className='text-light'>Intermedio</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Nivel: </small>
                <small className='text-light'>Básico</small>
              </div>
            </article>

          </div>
        </div>

        <div className="experience__frontend">
          <h3>Backend</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Python</h4>
                <small className='text-light'>Nivel: </small>
                <small className='text-light'>Básico</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Django</h4>
                <small className='text-light'>Nivel: </small>
                <small className='text-light'>Básico</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>SQLite</h4>
                <small className='text-light'>Nivel: </small>
                <small className='text-light'>Básico</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Nivel: </small>
                <small className='text-light'>Básico</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Nivel: </small>
                <small className='text-light'>Básico</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Node js</h4>
                <small className='text-light'>Nivel: </small>
                <small className='text-light'>Básico</small>
              </div>
            </article>

          </div>
        </div>

      </div>


    </section>
  )
}

export default Experience