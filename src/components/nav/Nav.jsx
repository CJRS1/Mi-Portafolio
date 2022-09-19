import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { MdContactMail } from 'react-icons/md'
import { FaUserTie } from 'react-icons/fa'
import { GiSpellBook } from 'react-icons/gi'
import { MdRoomService } from 'react-icons/md'
import { useState } from 'react'
import './nav.css'



const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <div className='menu__nav-container'>
      <nav className='menu__container'>
        <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome style={{ fontSize: '50px' }} /></a>
        <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUserTie style={{ fontSize: '50px' }} /></a>
        <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><GiSpellBook style={{ fontSize: '50px' }} /></a>
        {/* <a href="#services" onClick = {()=> setActiveNav('#services')} className={activeNav ==='#services' ? 'active':''}><MdRoomService style={{fontSize:'50px'}}/></a> */}
        <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdContactMail style={{ fontSize: '50px' }} /></a>
      </nav>
    </div>

  )
}

export default Nav