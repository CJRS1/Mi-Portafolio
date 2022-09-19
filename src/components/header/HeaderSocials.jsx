import React from 'react'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {AiOutlineGithub} from 'react-icons/ai'

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/crso/" rel="noopener noreferrer" target="_blank" ><AiOutlineLinkedin style={{fontSize:'50px'}}/></a>
            <a href="https://github.com/CJRS1" rel="noopener noreferrer" target="_blank" ><AiOutlineGithub style={{fontSize:'50px'}}/></a>
        </div>
    )
}

export default HeaderSocials