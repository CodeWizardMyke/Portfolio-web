import React from 'react'
import './HeaderDesk.css';
import { useScrollToSection } from '../../hooks/useScrollToSection';

import dataProfile from "../../data/profile.json";

import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";

function HeaderDesk({activeSection}) {
    const scrollToSection = useScrollToSection();

    const handleClick = (id) => scrollToSection(id);

  return (
    <header className='HeaderDesk'>
       <div className='intro'>
            <div className='titles'>
                <h1>Myke William</h1>
                <h2>Ciência da computação</h2>
                <p>Crio aplicações para web e aplicativos mobile android/ios</p>
            </div>
            <div>
                <nav>
                    <ul>
                        <li onClick={()=> handleClick("sobre")} className={activeSection === "sobre" ? "active" : ""} >Sobre</li>
                        <li onClick={()=> handleClick("projetos")} className={activeSection === "projetos" ? "active" : ""} >Projetos</li>
                        <li onClick={()=> handleClick("experiencia")} className={activeSection === "experiencia" ? "active" : ""} >Experiência</li>
                    </ul>
                </nav>
            </div>
       </div>
       <div className='link'>
            <nav>
                <ul>
                    <li onClick={()=> window.open(dataProfile.git, "_blank")} ><FaGithub/></li>
                    <li onClick={()=> window.open(dataProfile.linkedin, "_blank")} ><IoLogoLinkedin/></li>
                    <li onClick={()=> window.open(dataProfile.isntagram, "_blank")} ><FaInstagram/></li>
                </ul>
            </nav>
       </div>
    </header>
  )
}

export default HeaderDesk