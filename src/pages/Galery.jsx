import React from 'react'
import './Galery.css'
import { useActiveSection } from '../hooks/useActiveSection.js'
import Header from '../components/_header/Header.jsx';
import HeaderDeskLink from '../components/_header/HeaderDeskLink.jsx';
import GaleryExpose from '../components/galery/GaleryExpose.jsx';


function Galery() {
  const activeSection = useActiveSection(["sobre", "projetos", "experiencia"]);

  return (
    <main>
      <Header activeSection={activeSection} />
      <section className='main'>
          <HeaderDeskLink ctiveSection={activeSection} />
          <article className="content">
            < GaleryExpose />
          </article>
        </section>
    </main>
  )
}

export default Galery